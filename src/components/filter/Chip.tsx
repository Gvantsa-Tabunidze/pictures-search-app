'use client'

import React from 'react'

interface ChipProps{

    label:string,
    onToggle:(label:string)=>void,
    selected:boolean
}

function Chip({label,onToggle,selected}:ChipProps) {
  return (
    <button type='button'  onClick={()=>onToggle(label)} aria-pressed={selected} 
    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors
        ${selected ? 'bg-purple-950 text-white border-purple-950 shadow-sm': 'bg-white text-gray-700 border-gray-300 hover:bg-purple-300'}
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1`}>
        {label}
    </button>
  )
}

export default Chip
