'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Success = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) {
      const timeout = setTimeout(() => {
        router.push(`/design?user=${user}`);
      }, 2000);

      return () => clearTimeout(timeout); // Clean up if component unmounts early
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen text-2xl text-green-600">
      Success!
    </div>
  );
};

export default Success;
