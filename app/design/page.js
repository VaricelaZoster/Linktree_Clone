'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Design = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const user = searchParams.get('user')

  const [userExists, setUserExists] = useState(null)
  const [links, setLinks] = useState([])

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
    <div className="flex justify-center items-center bg-amber-100 h-screen">
      <div className="flex flex-col justify-center items-center h-screen sm:h-200 w-120">
        <div className="flex bg-amber-400 h-80 w-full justify-center items-center text-5xl font-extrabold rounded-t-3xl p-4">
          {user}
        </div>
        <div className="bg-amber-500 h-220 w-full rounded-b-3xl p-4 overflow-y-auto">
          {links.length > 0 ? (
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 underline hover:text-blue-600"
                  >
                    {link.Text}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No links available</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Design
