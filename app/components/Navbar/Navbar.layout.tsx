'use client'

import Navbar from '@components/Navbar/Navbar.component';
import { usePathname } from 'next/navigation'
import { LOGIN_KEY } from 'redux/Login/Login.constant';

const NavbarLayout = () => {
  const pathsToAvoid = ['login'];
  const currentPathName = usePathname();
  const theresSession = localStorage.getItem(LOGIN_KEY)

  const notIncludes = !pathsToAvoid.includes(currentPathName.replace('/', ''))
  return (
    <>
      {(theresSession && notIncludes) && <Navbar />}
    </>
  );
}

export default NavbarLayout;