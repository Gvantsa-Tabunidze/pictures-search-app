'use client'
import React, { useState } from 'react'
import Chip from './Chip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


interface SearchAndChipsProps{
  searchValue:string,
  onSearchChange:(value:string)=>void,
  selectedChip:string | null,
  toggle:(label:string)=>void
}

function SearchAndChips({onSearchChange,searchValue, selectedChip,toggle}:SearchAndChipsProps) {

const chips = ['Nature', '3D Renders','Animals', 'Architecture-interior', 'People', 'Experimental', 'Film', 'Fashion-beauty']


return (
  <div className="flex flex-col w-full space-y-6">
    
    {/* Search Input */}
    <input
      type="text"
      name="search"
      className="w-full px-4 py-3 border border-gray-300 shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition placeholder-gray-400 
        rounded-full text-base"
      placeholder="Search photos and illustrations"
      onChange={(e) => onSearchChange(e.target.value)}
      value={searchValue}
    />

    {/* Chips */}
    <div className="flex flex-wrap justify-center gap-2 w-full mb-8">
      {chips.map((el, index) => (
        <Chip
          key={index}
          label={el}
          selected={selectedChip === el}
          onToggle={toggle}
        />
      ))}
    </div>
  </div>
)


}

export default SearchAndChips
