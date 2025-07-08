'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Success = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) {
      if (countdown === 0) {
        router.push(`/design?user=${user}`);
      } else {
        const timer = setTimeout(() => {
          setCountdown((prev) => prev - 1);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [countdown, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl text-green-600">
      <div>Success!</div>
      <div className="mt-4 text-xl text-gray-700">
        Redirecting in {countdown}...
      </div>
    </div>
  );
};

export default Success;
