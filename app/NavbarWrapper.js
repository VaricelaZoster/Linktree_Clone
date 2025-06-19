'use client';

import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar'

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hideNavbar = pathname.startsWith('/generate');

  if (hideNavbar) return null;

  return <Navbar />;
}