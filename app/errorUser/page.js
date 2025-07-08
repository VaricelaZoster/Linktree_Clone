'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ErrorUser = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, [router]);

  return (
    <div className='bg-blue-500 h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-12 items-center text-center'>
        <div className='font-bold text-white text-7xl'>:(</div>
        <div className='font-bold text-white lg:text-5xl md:text-4xl sm:text-2xl'>
          The user you were looking for doesn't exist
        </div>
        <div className='text-white text-lg mt-4'>
          Redirecting to homepage...
        </div>
      </div>
    </div>
  );
};

export default ErrorUser;
