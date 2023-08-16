'use client'

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react'
import { LOGIN_KEY } from 'redux/Login/Login.constant'

export const MiddleWareLogin = () => {
  const currentPathName = usePathname();
  const router = useRouter()


  const checkLoginService = () => {
    const login = localStorage.getItem(LOGIN_KEY)

    if (currentPathName.startsWith('/login')) {
      login && router.replace('/');
      return;
    }

    if (currentPathName.startsWith('/')) {
      !login && router.replace('/login');
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