'use client'

import { Login } from '@interfaces/Login';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { LOGIN_KEY } from 'redux/Login/Login.constant'
import { initialSetLogin, setIsLoading } from 'redux/Login/Login.reducer';

export const MiddleWareLogin = () => {
  const currentPathName = usePathname() as string;
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const _formVal = JSON.parse(localStorage.getItem(LOGIN_KEY) as string) as Login
    if (!_formVal) return
    dispatch(initialSetLogin(_formVal))
    dispatch(setIsLoading(false))
  }, [])


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