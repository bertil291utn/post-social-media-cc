'use client'

import Alert from '@components/common/Alert.component';
import Button from '@components/common/Button/Button.component';
import Card from '@components/common/Card.component';
import { ERROR } from '@interfaces/ButtonVariantTypes.constants';
import { User } from '@interfaces/User';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SAVED_USERNAME_DEVICE } from 'redux/Login/Login.constant';
import { initialSetLogin, setIsLoading } from 'redux/Login/Login.reducer';
import { LoginSelector } from 'redux/Login/Login.selector';
import { getRandomUser } from 'services/getRandomUser.service';
import { checkEmpty, CheckExistingUser, SaveUser } from 'services/saveUser.service';
import { v4 as uuidv4 } from 'uuid';

const Login = () => {
  const router = useRouter()
  const [toastMessage, setToastMessage] = useState<boolean | string>('');
  const [addUserMutation] = SaveUser();
  const login = useSelector(LoginSelector)
  const [_formVal, setFormValues] = useState(
    {
      id: '',
      isActive: true,
      user: {
        id: '', username: '', name: '', avatarURL: ''
      }
    }
  )

  const setUser = async () => {
    const idUser = uuidv4();
    let generatedUser = await getRandomUser();
    generatedUser = generatedUser.results[0];
    const username = localStorage.getItem(SAVED_USERNAME_DEVICE) as string
    setFormValues(p => ({
      ...p,
      user: {
        id: idUser,
        username: username || '',
        avatarURL: generatedUser.picture.medium,
        name: `${generatedUser.name.first} ${generatedUser.name.last}`
      }
    }))
  }

  useEffect(() => {
    setUser()
  }, [])


  useEffect(() => {
    const username = localStorage.getItem(SAVED_USERNAME_DEVICE) as string
    setFormValues(p => ({
      ...p,
      user: {
        ...p.user,
        username,
      }
    }))
  }, [login?.isActive])

  const { data: existingUser } = CheckExistingUser(_formVal.user);


  const dispatch = useDispatch();

  const onLoginSuccess = () => {
    dispatch(setIsLoading(false))
    router.replace('/')
  }

  const LoginAction = async () => {
    if (!_formVal.user.username) {
      setToastMessage('User name can not be empty')
      return;
    }

    try {
      checkEmpty(_formVal.user);

      if (existingUser?.users.length) {
        const user = existingUser?.users[0] as User
        const newLogin = {
          ..._formVal,
          user: {
            id: user.id,
            username: user.username,
            avatarURL: user.avatarURL,
            name: user.name,
            likedPosts: user.likedPosts
          }
        }
        onLoginSuccess();
        dispatch(initialSetLogin(newLogin))
        return;
      }

      const variables = { ..._formVal.user };
      const resp = await addUserMutation({ variables });
      if (resp.data.createUsers.users.length) {
        onLoginSuccess();
        dispatch(initialSetLogin({ ..._formVal, user: resp.data.createUsers.users[0] }))
      }

    } catch (error: any) {
      setToastMessage('Something happened, user is not signed up correctly')
    }

  }


  const ActionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((p) => ({ ...p, user: { ...p.user, username: e.target.value } }));
  }

  return (
    <div className={`flex items-center justify-center w-1/2 mx-auto`}>
      <Card>
        <div className='w-full mx-auto my-2'>

          <div className="sm:col-span-4 mb-4">
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset focus:ring-0 ring-gray-300  sm:max-w-md">
                <input type="text" name="username" id="username" autoComplete="username"
                  value={_formVal.user.username || ''}
                  onChange={ActionChange}
                  className="
                block flex-1 border-0 bg-transparent p-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"

                />
              </div>
            </div>
          </div>

          <Button
            className={`text-center `}
            onClick={LoginAction}
          >
            {/* <FcGoogle className={`absolute text-lg`} /> */}
            <span className='block text-white'>
              Sign in
            </span>
          </Button>
          <div className='absolute bottom-8'>
            <Alert
              show={!!toastMessage}
              setShow={setToastMessage}
              variant={ERROR}
            >
              <span>{toastMessage}</span>
            </Alert>
          </div>
        </div>
      </Card>
    </div>);
}

export default Login;