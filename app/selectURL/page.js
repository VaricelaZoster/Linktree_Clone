'use client'
import LinkInput from '@/components/LinkInput'
import React, { useState, useEffect } from 'react'
import './page.css'


const SelectURL = () => {
  const [user, setUser] = useState('');
  const [inputCount, setInputCount] = useState(1); 
  const [showError, setShowError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username") || '';
    setUser(username);
  }, []);

  const addInput = () => {
    if (inputCount < 6) {
      setInputCount(prev => prev + 1);
      setShowError(false);
    } else {
      setShowError(true);
      setIsShaking(true);

      // Remove shake class after animation
      setTimeout(() => {
        setIsShaking(false);
      }, 500); // match animation duration
    }
  };

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
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
                className='border-2 bg-[rgb(246,247,245)] border-gray-400 text-gray-500 flex justify-center align-middle h-12 w-12 rounded-md text-3xl'
              >
                +
              </button>
            )}
          </div>
        ))}
      </div>

      {showError && (
        <div className={`pt-3 text-red-400 ${isShaking ? 'shake' : ''}`}>
          Cannot add more links
        </div>
      )}

      <button className='mt-10 p-3 w-1/2 rounded-full text-white font-extrabold text-xl bg-purple-500 cursor-pointer hover:bg-purple-700'>
        Continue
      </button>
    </div>
  );
};

export default SelectURL;
