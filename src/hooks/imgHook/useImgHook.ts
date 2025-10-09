'use client'
import React, { useEffect, useRef, useState } from 'react'

function useImgHook(onClose:()=>void) {
 const divRef = useRef<HTMLDivElement>(null)
 const [imgLoader, setImgLoader] = useState(true)
 
 
 //Click outside event habdling
 useEffect(()=>{
     const handleClickOutside  = (e:MouseEvent)=>{
         if(divRef.current && !divRef.current.contains(e.target as Node)) {
            onClose()
         }
         
     }
     document.body.addEventListener('click', handleClickOutside)
 
     //clear 
     return () => {
         document.body.removeEventListener('click', handleClickOutside)
     }
 },[onClose])
 
 
    
  return {
    divRef,
    imgLoader,
    setImgLoader
  }
}

export default useImgHook