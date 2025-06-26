'use client'

import React, { useState, useEffect } from 'react'
import LinkInput from '@/components/LinkInput'
import './page.css'
import isUrl from 'is-url'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SelectURL = () => {
  const [user, setUser] = useState('');
  const [inputValues, setInputValues] = useState([{ label: '', url: '' }]);
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

let data = {}

const checkURL = () => {
  const urlValidations = inputValues.map(input => isUrl(input.url));
  console.log(inputValues)
  if (urlValidations.includes(false)) {
    const falseIndexes = urlValidations.reduce((acc, val, index) => {
      if (!val) acc.push(index + 1);
      return acc;
    }, []);
    //alert(`Link ${falseIndexes.join(', ')} ${falseIndexes.length > 1 ? 'are' : 'is'} not valid URL${falseIndexes.length > 1 ? 's' : ''}`);
    toast.error(`Link ${falseIndexes.join(', ')} ${falseIndexes.length > 1 ? 'are' : 'is'} not valid URL${falseIndexes.length > 1 ? 's' : ''}`)
    return;
  }

  data = {
    User: user,
    Links: inputValues.map(input => ({
      Text: input.label.trim(),
      URL: input.url.trim()
    }))
  };

  console.log('Formatted Data:', data);
  toast.success('All links are valid!');
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
              label={input.label || ''}
              url={input.url || ''}
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

      <ToastContainer />
    </div>
  );
};

export default SelectURL;
