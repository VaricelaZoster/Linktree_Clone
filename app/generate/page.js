'use client'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Generate = () => {
  const inputRef = useRef(null)
  const router = useRouter()

  async function setLocalStorage() {
    const value = inputRef.current.value
    if (value.trim() === '') {
      toast.error('Please enter a valid username', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        closeOnClick: true,
      })
    }
    else if (value.length <= 3) {
      toast.error('Name is too short', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        closeOnClick: true,
      })
    }
    else {
      console.log(value)
      const response = await fetch('/api/find', {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ "data.User": value })
      })
      const result = await response.json()
      if (result.found) {
        toast.error('Name is already claimed', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          closeOnClick: true,
        })
        
      }
      else {
        localStorage.setItem('username', value)
        router.push('/selectURL')
      }
    }
  }

  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-[12fr_13fr]'>
      <div className='col1 flex flex-col w-full justify-center items-center gap-4'>
        <h1 className='font-extrabold text-4xl'>Welcome to Linktree!</h1>
        <div className='flex text-center text-xl text-gray-500 mx-42'>Choose your Linktree username for your profile. You can always change it later.</div>
        <div className='flex flex-col pt-4 gap-5'>
          <input ref={inputRef} className='bg-[rgb(246,247,245)] focus:outline-2 focus:border-transparent focus:outline-black h-12 rounded-lg px-3 border-2 border-transparent hover:border-[rgb(219,220,218)]' placeholder='linktr.ee/username' type='text' />
          <p className='flex text-center text-gray-500 text-lg px-5 pb-10'>By continuing, you agree to receive offers, news and updates from<br /> Linktree</p>
          <button onClick={() => setLocalStorage()} className='bg-purple-700 text-white text-xl font-bold py-3 rounded-full hover:bg-purple-900 cursor-pointer'>Continue</button>
          <p className='text-center pt-2 text-gray-500'>Already have an account? <a className='text-purple-700 underline cursor-pointer'>Go back to login</a></p>
        </div>
      </div>
      <div className='col2 h-screen w-full bg-[rgb(213,163,52)] overflow-clip hidden lg:block '>
        <img className='h-screen object-contain w-full transform scale-210 ' src="https://assets.production.linktr.ee/auth/3383/media/banner-register-social-desktop.18fa56fce6ad2db4f48b.webp"></img>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Generate