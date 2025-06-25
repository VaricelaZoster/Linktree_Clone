'use client'
import React, { useState, useEffect } from 'react'
import LinkInput from '@/components/LinkInput'
import './page.css'
import isUrl from 'is-url'

const SelectURL = () => {
  const [user, setUser] = useState('');
  const [inputValues, setInputValues] = useState([{ label: '', url: '' }]); // <-- track label & url
  const [showError, setShowError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username") || '';
    setUser(username);
  }, []);

  const addInput = () => {
    if (inputValues.length < 6) {
      setInputValues([...inputValues, { label: '', url: '' }]);
      setShowError(false);
    } else {
      setShowError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const handleLabelChange = (index, newLabel) => {
    const updatedInputs = [...inputValues];
    updatedInputs[index].label = newLabel;
    setInputValues(updatedInputs);
  };

  const handleUrlChange = (index, newUrl) => {
    const updatedInputs = [...inputValues];
    updatedInputs[index].url = newUrl;
    setInputValues(updatedInputs);
  };

  const arr = []
  const checkURL = () => {
    inputValues.map(index => {
      const b = isUrl(index.url)
      arr.push(b)
    });
    if (arr.includes(false)) {
      const falseIndexes = arr.reduce((acc, val, index) => {
        if (!val) acc.push(index+1);
        return acc;
      }, []);
      arr.length = 0
      alert(`Link ${falseIndexes} are not valid URLs`);    }
  };

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <div className='text-4xl font-extrabold pb-4'>
        Enter your links {user.toUpperCase()}
      </div>

      <div className='flex flex-col gap-4'>
        {inputValues.map((input, index) => (
          <div key={index} className='flex gap-2 items-center'>
            <LinkInput
              label={input.label}
              url={input.url}
              onLabelChange={(val) => handleLabelChange(index, val)}
              onUrlChange={(val) => handleUrlChange(index, val)}
            />
            {index === inputValues.length - 1 && (
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
        <div className={`pt-3 text-red-400 ${isShaking ? 'shake' : 'transition-opacity opacity-0 duration-200 ease-out select-none'}`}>
          Cannot add more links
        </div>
      )}

      <button
        onClick={checkURL}
        className='p-3 mt-4 w-1/2 rounded-full text-white font-extrabold text-xl bg-purple-500 cursor-pointer hover:bg-purple-700'
      >
        Continue
      </button>
    </div>
  );
};

export default SelectURL;
