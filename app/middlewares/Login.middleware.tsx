'use client'

import { Login } from '@interfaces/Login';
import { User } from '@interfaces/User';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { LOGIN_KEY } from 'redux/Login/Login.constant'
import { initialSetLogin, setIsLoading } from 'redux/Login/Login.reducer';
import { checkExistingUser } from 'services/saveUser.service';

export const MiddleWareLogin = () => {
  const currentPathName = usePathname() as string;
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: '' } as User)
  const { data: existingUser } = checkExistingUser(user);

  useEffect(() => {
    const isSessionActive = JSON.parse(localStorage.getItem(LOGIN_KEY) as string) as Login
    if (!isSessionActive) return
    setUser(isSessionActive.user)

    if (!existingUser?.users.length) return
    dispatch(initialSetLogin({ ...isSessionActive, user: existingUser?.users[0] }))
    dispatch(setIsLoading(false))
  }, [existingUser?.users])


  const checkLoginService = () => {
    const isSessionActive = localStorage.getItem(LOGIN_KEY)

    if (currentPathName.startsWith('/login') && isSessionActive) {
      router.replace('/');
      return;
    }

  }

  useEffect(() => {
    checkLoginService()
  }, [currentPathName])

  return (
    <></>
  )

}