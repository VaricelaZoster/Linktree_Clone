'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const GenerateURL = () => {
  const username = localStorage.getItem("username");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const router = useRouter();

  const items = [
    "Instagram", "WhatsApp", "TikTok",
    "YouTube", "Personal Website", "Spotify",
    "Threads", "Facebook", "X",
    "SoundCloud", "Snapchat", "Pinterest",
    "Patreon", "Twitch", "Apple Music",
  ];

  const togglePlatform = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else if (selectedPlatforms.length < 5) {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const handleContinue = () => {
    localStorage.setItem('selectedPlatforms', JSON.stringify(selectedPlatforms));
    router.push('/selectURL');
  };

  return (
    <div className='flex flex-col justify-center min-h-screen items-center gap-6 px-4 py-8'>
      <div className='flex text-4xl font-extrabold text-center'>
        Which platforms are you on? {username?.toUpperCase()}
      </div>

      <div className='text-xl text-gray-500 text-center'>
        Pick up five to get started. You can update at any time.
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl w-full'>
        {items.map((text, i) => {
          const isSelected = selectedPlatforms.includes(text);
          return (
            <div
              key={i}
              onClick={() => togglePlatform(text)}
              className={`text-center p-4 border-2 rounded-lg cursor-pointer transition
                ${isSelected ? 'border-black bg-gray-100' : 'border-gray-400'}`}
            >
              {text}
            </div>
          );
        })}
      </div>

      <button
        onClick={handleContinue}
        className={`mt-6 w-[72%] py-3.5 font-semibold rounded-full text-white
          ${selectedPlatforms.length >= 0
            ? 'bg-purple-600 hover:bg-purple-900 cursor-pointer'
            : 'bg-purple-300 cursor-not-allowed'
          }
        `}
      >
        Continue
      </button>
    </div>
  )
}

export default GenerateURL;
