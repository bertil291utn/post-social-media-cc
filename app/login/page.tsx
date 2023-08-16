'use client'

import Alert from '@components/common/Alert.component';
import Button from '@components/common/Button/Button.component';
import { TERTIARY } from '@components/common/Button/button.helper';
import Card from '@components/common/Card.component';
import { ERROR } from '@interfaces/ButtonVariantTypes.constants';
import { ChangeEvent, useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { initialSetLogin, setIsLoading } from 'redux/Login/Login.reducer';

const Login = () => {
  const [toastMessage, setToastMessage] = useState<boolean | string>('')

  const [_formVal, setFormValues] = useState(
    {
      id: '',
      isActive: false,
      user: {
        id: '', username: '', name: '', avatarURL: ''
      }
    }
  )
  const dispatch = useDispatch();



  const LoginAction = () => {
    if (!_formVal.user.username) {
      setToastMessage('User name can not be empty')
      return
    }

    //TODO: send user to save db and check behind the scenes if the current user 
    // already exists just login other case store whole form data 

    dispatch(initialSetLogin(_formVal))
    dispatch(setIsLoading(false))
    localStorage.setItem('username', _formVal.user.username)
  }

  useEffect(() => {
    const username = localStorage.getItem('username') as string
    username && setFormValues((p) => ({ ...p, user: { ...p.user, username } }));
  }, [])

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
                  value={_formVal.user.username}
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