'use client';

import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar'

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hideNavbar = pathname.startsWith('/generate') || pathname.startsWith('/selectPlatforms') || 
  pathname.startsWith('/selectURL') || pathname.startsWith('/design')
  || pathname.startsWith('/success') || pathname.startsWith('/errorUser');

  if (hideNavbar) return null;

  return <Navbar />;
}