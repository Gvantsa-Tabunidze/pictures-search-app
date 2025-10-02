'use client'
import React from 'react'

export default function Search() {
  return (
    <div className='w-full max-w-md mx-auto'>
      <input type='text' name='search' 
       className='w-full 
          px-4 py-2 
          border border-gray-300 
          shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          focus:border-blue-500
          transition
          placeholder-gray-400
          rounded-full'
          />
    </div>
  )
}
