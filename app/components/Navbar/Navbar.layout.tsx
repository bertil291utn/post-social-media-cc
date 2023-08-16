'use client'

import Navbar from '@components/Navbar/Navbar.component';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import { LOGIN_KEY } from 'redux/Login/Login.constant';

const NavbarLayout = () => {
  const pathsToAvoid = ['login'];
  const currentPathName = usePathname() as string;
  const [theresSession, setTheresSession] = useState(false)

  useEffect(() => {
    setTheresSession(!!localStorage.getItem(LOGIN_KEY))

  }, [])

  const notIncludes = !pathsToAvoid.includes(currentPathName.replace('/', ''))
  return (
    <>
      {(theresSession && notIncludes) && <Navbar />}
    </>
  );
}

export default NavbarLayout;