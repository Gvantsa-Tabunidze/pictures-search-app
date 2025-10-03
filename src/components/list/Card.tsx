'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { unsplashImage } from '@/interfaces/img-interface'
import ImgDiv from '../popUp/ImgDiv'


interface ImageCardProps{
  data: unsplashImage,
  onClick:(id:string)=>void
}

export default function Card({data,onClick}:ImageCardProps) {


  return (
    <div className='relative w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer'>
      <div onClick={()=>onClick(data.id)}>
        <Image src={data.urls.small} alt={`picture of ${data.title}`} width={data.width} height={data.height}placeholder='blur' blurDataURL={data.urls.thumb} />
        <div className='absolute top-2 right-2 flex space-x-2'>
            <button className='p-2 bg-white bg-opacity-70 rounded-full hover:bg-red-500 hover:text-white transition'><FontAwesomeIcon icon={faHeart} /></button>
            <button className='p-2 bg-white bg-opacity-70 rounded-full hover:bg-red-500 hover:text-white transition'><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <h2>{data.title?.alt_description}</h2>
        <p>{data.user?.name}</p>
        <p>{`${data.likes} likes`}</p>
        <button><FontAwesomeIcon icon={faDownload}/> Donwload</button>
      </div>
    </div>
  )
}
