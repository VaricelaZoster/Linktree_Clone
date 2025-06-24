import React from 'react'
import { MdInsertLink, MDInsertLink } from 'react-icons/md'
import { Tooltip } from '@mui/material'

const LinkInput = () => {
  return (
    <div className='flex h-12 gap-4'>
      <Tooltip disableInteractive placement='top' title={
        <React.Fragment>
          <div className='text-[0.8rem]'>Insert URL Here</div>
        </React.Fragment>
      }>
        <div className='border-gray-400 rounded-md border-2 flex w-12 text-xl text-gray-500 justify-center items-center bg-[rgb(246,247,245)] '><MdInsertLink/></div>
      </Tooltip>
      <input placeholder='Enter display text here' className='bg-[rgb(246,247,245)] px-2 border-2 border-gray-400 rounded-md ' type='url'></input>
    </div>
  )
}

export default LinkInput