'use client'
import React from 'react'

const generateURL = () => {
    const username = localStorage.getItem("username");
  return (
    <div>{username}</div>
  )
}

export default generateURL