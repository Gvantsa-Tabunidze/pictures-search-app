'use client'
import React, { useEffect, useState } from 'react'
import { LoginButton } from '../buttons/LoginButton'
import useAuthStore from '@/store/authStore'

function Navbar() {
  const [hydrated, setHydrated] = useState(false)
  const setToken = useAuthStore((state) => state.setToken)
  const userToken = useAuthStore((state)=>state.token)
  const logout = useAuthStore((state) => state.logout)

//  useEffect(() => {
//     const token = localStorage.getItem('unsplash_token')
//     if (token) setToken(token)
//     setHydrated(true) // ensures UI doesn't flash wrong state
//   }, [setToken])

//   if (!hydrated) return null

  return (
    <nav className="flex justify-between items-center px-24 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Awesome Gallery</h1>
      {userToken ? (
        <button onClick={logout} className="px-5 py-2 bg-purple-950 text-white rounded hover:bg-purple-400">
          Log out
        </button>
      ) : (
        <LoginButton />
      )}
    </nav>
  )
}

export default Navbar
