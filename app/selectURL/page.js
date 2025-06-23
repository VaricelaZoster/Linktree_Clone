'use client'
import LinkInput from '@/components/LinkInput'
import React, { useState, useEffect } from 'react'

const SelectURL = () => {
  const [user, setUser] = useState('');
  const [inputCount, setInputCount] = useState(1); 

  useEffect(() => {
    const username = localStorage.getItem("username") || '';
    setUser(username);
  }, []);

  const addInput = () => {
    if (inputCount < 6) {
      setInputCount(prev => prev + 1);
    }
  }

  return (
    <div className='flex flex-col h-screen bg-amber-200 justify-center items-center'>
      <div className='text-4xl font-extrabold pb-4'>
        Enter your links {user.toUpperCase()}
      </div>

      <div className='flex flex-col gap-4'>
        {[...Array(inputCount)].map((_, index) => (
          <div key={index} className='flex gap-2 items-center'>
            <LinkInput />
            {index === inputCount - 1 && (
              <button
                onClick={addInput}
              >
                +
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectURL;
