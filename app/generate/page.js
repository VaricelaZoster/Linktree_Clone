import React from 'react'

const Generate = () => {
  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-[12fr_13fr]'>
      <div className='col1 flex flex-col w-full bg-amber-100 justify-center items-center'>
        <h1 className='font-bold'>Join Linktree</h1>
        <p>Sign up for free!</p>
        <div className='flex flex-col'>
          <input type='text'/>
          <button>Continue</button>
        </div>
      </div>
      <div className='col2 h-screen w-full bg-[rgb(213,163,52)] overflow-clip hidden lg:block '>
        <img className='h-screen object-contain w-full transform scale-210 ' src = "https://assets.production.linktr.ee/auth/3383/media/banner-register-social-desktop.18fa56fce6ad2db4f48b.webp"></img>
      </div>
    </div>
  )
}

export default Generate