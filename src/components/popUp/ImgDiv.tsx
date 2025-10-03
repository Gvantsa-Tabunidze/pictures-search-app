'use client'
import useFetchSingleImg from '@/hooks/quries/useFetchSingleImg'
import { unsplashImage } from '@/interfaces/img-interface'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'



interface ImgDivProps {
    data: unsplashImage,
    onClose: () => void
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

    <div ref={divRef} className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'>
        <div>
             <h2>{data?.title?.alt_description}</h2>
             <div>
                <div>
                <button>Add Favorites</button>
                <button>Add</button>
                </div>
                <button>Download</button>
             </div>
        </div>
        <Image src={data?.urls.regular ?? '/image-not-found'} alt={`picture of ${data?.title}`} width={data?.width} height={data?.height} 
        placeholder={data?.urls.regular ? 'blur' : undefined}  blurDataURL={data?.urls.regular ?? undefined} />
     
    </div>
  )
}

export default ImgDiv
