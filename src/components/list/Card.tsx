'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { unsplashImage } from '@/interfaces/img-interface'




export default function Card({likes,title,urls,user,width, height}:unsplashImage) {

  return (
    <div className='relative w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
      <div>
        <Image src={urls.small} alt={`picture of ${title}`} width={width} height={height}placeholder='blur' blurDataURL={urls.thumb} />
        <div className='absolute top-2 right-2 flex space-x-2'>
            <button className='p-2 bg-white bg-opacity-70 rounded-full hover:bg-red-500 hover:text-white transition'><FontAwesomeIcon icon={faHeart} /></button>
            <button className='p-2 bg-white bg-opacity-70 rounded-full hover:bg-red-500 hover:text-white transition'><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <h2>{title?.alt_description}</h2>
        <p>{user?.name}</p>
        <p>{likes}</p>
        <button><FontAwesomeIcon icon={faDownload}/> Donwload</button>
      </div>
    </div>
  )
}
