'use client'

import Button from '@components/common/Button/Button.component';
import { TERTIARY } from '@components/common/Button/button.helper';
import Card from '@components/common/Card.component';
import { ChangeEvent, useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { initialSetLogin } from 'redux/Login/Login.reducer';

const Login = () => {

  const [_formVal, setFormValues] = useState(
    {
      id: '',
      isActive: false,
      user: {
        id: '', username: '', name: '', avatarURL: ''
      }
    }
  )
  const [isLogin, setIsLogin] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLogin(!localStorage.getItem('username'))
  }, [])


  const LoginAction = () => {
    //TODO: send user to save db
    //TODO: dispatch current user is active session
    dispatch(initialSetLogin(_formVal))
    console.log('login action')
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
                  value={_formVal.user.username}
                  onChange={ActionChange}
                  disabled={!isLogin}
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
              Sign {`${isLogin ? 'in' : 'up'}`}
            </span>
          </Button>
        </div>
      </Card>
    </div>);
}

export default Login;