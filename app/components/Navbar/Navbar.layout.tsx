'use client'

import Navbar from '@components/Navbar/Navbar.component';
import { usePathname } from 'next/navigation'

const NavbarLayout = () => {
  const pathsToAvoid = ['login'];
  const currentPathName = usePathname();
  return (
    <>
      {!pathsToAvoid.includes(currentPathName.replace('/', '')) &&
        <Navbar />
      }
    </>
  );
}

export default NavbarLayout;