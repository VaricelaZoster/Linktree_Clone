import React from 'react'
import { MdInsertLink } from 'react-icons/md'
import { Tooltip } from '@mui/material'

const LinkInput = ({ url, label, onUrlChange, onLabelChange }) => {
  return (
    <div className='flex gap-4 items-center'>
      
      <input
        value={label}
        onChange={(e) => onLabelChange(e.target.value)}
        placeholder='Enter display text'
        className='bg-[rgb(246,247,245)] px-2 py-1 border-2 border-gray-400 rounded-md h-12 focus:outline-2 outline-black focus:border-transparent focus:border-b-transparent focus:border-l-transparent focus:border-r-transparent'
        type='text'
      />
      <input
        value={url}
        onChange={(e) => onUrlChange(e.target.value)}
        placeholder='Enter URL'
        className='h-12 bg-[rgb(246,247,245)] px-2 py-1 border-2 border-gray-400 rounded-md focus:outline-2 outline-black focus:border-transparent focus:border-b-transparent focus:border-l-transparent focus:border-r-transparent'
        type='url'
      />
    </div>
  )
}

export default LinkInput