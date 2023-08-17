'use client'

import Navbar from '@components/Navbar/Navbar.component';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LOGIN_KEY } from 'redux/Login/Login.constant';
import { LoginSelector } from 'redux/Login/Login.selector';

const NavbarLayout = () => {
  const pathsToAvoid = ['login'];
  const currentPathName = usePathname() as string;
  const [theresSession, setTheresSession] = useState(false)
  const login = useSelector(LoginSelector)

  
  useEffect(() => {
    const isThereSession = localStorage.getItem(LOGIN_KEY)
    setTheresSession(!!isThereSession)

  }, [login?.isActive])

  const notIncludes = !pathsToAvoid.includes(currentPathName.replace('/', ''))
  return (
    <>
      {(theresSession && notIncludes) && <Navbar />}
    </>
  );
}

export default NavbarLayout;