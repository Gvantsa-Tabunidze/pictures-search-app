'use client'
import React, { useState } from 'react'
import Chip from './Chip'


interface SearchAndChipsProps{
  searchValue:string,
  onSearchChange:(value:string)=>void,
  selectedChip:string | null,
  toggle:(label:string)=>void
}

function SearchAndChips({onSearchChange,searchValue, selectedChip,toggle}:SearchAndChipsProps) {

const chips = ['Nature', '3D Renders','Animals', 'Architecture-interior', 'People', 'Experimental', 'Film', 'Fashion-beauty']

  return (
// Search
  <div className='flex flex-col'>
         <input type='text' name='search' className='w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
          focus:border-blue-500transitionplaceholder-gray-400 rounded-full' placeholder='Search photos and illustrations'
        onChange={(e)=>onSearchChange(e.target.value)}
        value={searchValue}
          />
  
  {/* Chips */}
   <div className='flex my-8 gap-2'>
      {chips.map((el, index)=> 
      <Chip key={index} label={el}  selected={selectedChip === el} onToggle={toggle}/>
      )}
    </div>
      </div>
  )
}

export default SearchAndChips
