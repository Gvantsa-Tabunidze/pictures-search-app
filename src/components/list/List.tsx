'use client'

import useFetchImgs from '@/hooks/quries/useFetchImgs'
import React, { useCallback, useEffect, useState } from 'react'
import Card from './Card'
import ImgDiv from '../popUp/ImgDiv'
import useFetchSingleImg from '@/hooks/quries/useFetchSingleImg'




export default function List() {
  const {data,isLoading, error, isFetchingNextPage, hasNextPage, fetchNextPage } = useFetchImgs()
  const [selectedId, setSelectedID] = useState<string| null>(null)
  const {data:singleImg, isLoading:singleImgLoading, } = useFetchSingleImg(selectedId!)

  const openTheDiv = useCallback((id:string)=>{
    setSelectedID(id)
  }, [])

  const onCloseDiv = ()=>{
    setSelectedID(null)
  }

  //Create a screen listener
  useEffect(()=>{
    const handleScroll = ()=>{
      const scrollPosition = window.innerHeight + window.scrollY
      const bottomPosition =  document.body.offsetHeight-200

      if (scrollPosition >= bottomPosition && hasNextPage && !isFetchingNextPage){
       fetchNextPage()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])


  if(isLoading) return <div>Loading . . .</div>
  if(data){
    console.log(data)
  } 
  if(singleImg) {
    console.log(singleImg)
  }
  if(error) return <div>No data to fetch</div>




  return (
    <div className='position-relative'>
     {selectedId && singleImg ? <ImgDiv data={singleImg} onClose={onCloseDiv}/> : null}
     {data?.pages.map((page, i)=>
       <div key={i}>
        {page.map((img)=> <Card key={img.id} data={img} onClick={()=>openTheDiv(img.id)}/>)}
       </div>
     )}
     <h2>{isFetchingNextPage ? 'Loading more pictures' : 'No more pictures to load'}</h2>
    </div>
  ) 
}
