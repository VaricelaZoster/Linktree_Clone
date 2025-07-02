'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Design = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const user = searchParams.get('user')
  const copy = searchParams.get('copy')

  const [userExists, setUserExists] = useState(null)
  const [links, setLinks] = useState([])

  const copying = () => {
    const url = new URL(window.location.href)
    url.searchParams.delete('copy')

    navigator.clipboard.writeText(url.toString())
      .then(() => {
        toast.success('Copied!!',{
          autoClose: 1500,
          pauseOnHover: false
        })
      })
      .catch(err => console.error('Copy failed', err));
  }

  useEffect(() => {
    async function verify(user) {
      if (!user) {
        router.push('/errorUser')
        return
      }

      try {
        const response = await fetch('/api/find', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'data.User': user }),
        })

        const result = await response.json()

        if (result.found && Array.isArray(result.result.data.Links)) {
          setUserExists(true)
          setLinks(result.result.data.Links)
        } else {
          router.push('/errorUser')
        }
      } catch (error) {
        console.error('Error verifying user:', error)
        router.push('/errorUser')
      }
    }

    verify(user)
  }, [user, router])

  if (userExists === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        <span className="ml-4 text-black text-lg">Verifying user...</span>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center bg-[rgb(250,249,254)] h-screen">
      <div className="flex flex-col justify-center items-center h-screen sm:h-200 w-120">
        <div className="flex text-[rgb(184,175,243)] border-x-2 border-t-2 border-t-[rgb(160,150,228)] border-x-[rgb(160,150,228)] h-80 w-full justify-center items-center text-5xl font-extrabold rounded-t-3xl p-4">
          {user.toUpperCase()}
        </div>
        <div className="border-x-2 border-b-2 border-b-[rgb(160,150,228)] border-x-[rgb(160,150,228)] h-220 w-full rounded-b-3xl p-4 overflow-y-auto">
          {links.length > 0 ? (
            <ul className="flex flex-col gap-7">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl border-2 border-[rgb(160,150,228)] rounded-full bg-white h-15 text-center text-[rgb(141,125,241)] flex justify-center items-center"
                >
                  {link.Text.toUpperCase()}
                </a>
              ))}
            </ul>
          ) : (
            <p>No links available</p>
          )}
        </div>
        {
          copy == 'true' && (
            <div onClick={() => copying()} className='flex m-3 cursor-pointer text-md text-[rgb(141,125,241)]'>Copy!</div>
          )
        }
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Design
