'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { ParsedImage } from '@/api/parser/imgParsers'
import useFavorites from '@/store/favoritesStore'



interface ImageCardProps{
  data: ParsedImage,
  onClick:(id:string)=>void
}

export default function Card({data,onClick}:ImageCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const toggleFavorites = useFavorites((state)=>state.toggleFav)
 
const handleHover = (e:React.MouseEvent<HTMLDivElement>)=>{
  if(e.type=== 'mouseenter'){
      setIsHovered(true)
  } else if(e.type=== 'mouseleave'){
      setIsHovered(false)
  }

}



  return (
    <div className='relative w-72  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer'
    onMouseEnter={handleHover} onMouseLeave={handleHover}
  
    >
      <div onClick={()=>onClick(data.id)} className='relative w-full' >
        <Image src={data.imgSrc} alt={`picture of ${data.alt}`} width={data.width} height={data.height} placeholder='blur' blurDataURL={data.thumb} 
        className='w-full h-auto rounded-t-xl'  />
        {isHovered &&
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 transition-opacity">
              <div className='flex px-3 py-2 w-full justify-between items-center'>
                <p className='text-white'>{`${data.likes} Likes`}</p>
                <div className='flex gap-2'>
                  <button className='px-3 py-2 bg-white bg-opacity-70 rounded-full hover:bg-purple-300 text-purple-950 transition'
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorites(data)
  }}
                  ><FontAwesomeIcon icon={faHeart} /></button>
                  <button className='px-3 py-2 bg-white bg-opacity-70 rounded-full hover:bg-purple-300 text-purple-950 transition'><FontAwesomeIcon icon={faDownload}/></button>
                </div>
                
              </div>
             
              <div className='flex flex-col justify-end items-start relative w-full h-full p-4 text-white'>
                <h3 className='text-lg font-bold'>{data.author}</h3>
                <small className='text-left'>{data.alt}</small>
              </div>
         </div>
        }
       
        
      </div>
    </div>
  )
}
