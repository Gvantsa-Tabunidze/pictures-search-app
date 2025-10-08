'use client'
import { ParsedImage } from '@/api/parser/imgParsers'
import useFetchSingleImg from '@/hooks/quries/useFetchSingleImg'
import { unsplashImage } from '@/interfaces/img-interface'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'




interface ImgDivProps {
    data: ParsedImage,
    onClose: () => void,
   
}
function ImgDiv({onClose, data}:ImgDivProps) {

    
    const divRef = useRef<HTMLDivElement>(null)
    

    //Click outside event habdling
    useEffect(()=>{
        const handleClickOutside  = (e:MouseEvent)=>{
            if(divRef.current && !divRef.current.contains(e.target as Node)) 
            onClose()
        }
        document.body.addEventListener('click', handleClickOutside)

        //clear 
        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    },[onClose])


   

  return (
     
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-40">
        <div ref={divRef} className='fixed inset-0 bg-white  flex flex-col items-center  z-50 max-w-[1200px] mx-auto p-12 rounded-2xl shadow'>
           
        <div className="flex justify-between w-full">
             <h2>{data?.alt}</h2>
             <div className='flex gap-8'>
                <button>Add Favorites</button>
                <button>Download</button>
             </div>
        </div>
        <Image src={data.imgSrc ?? '/image-not-found'} alt={`picture of ${data?.alt}`} width={data?.width} height={data?.height}
        placeholder='blur'  blurDataURL={data?.thumb ?? undefined}
        style={{width: '100%',height: 'auto', objectFit: 'contain'}}  />
     
        </div>
    </div>
  )
}

export default ImgDiv
