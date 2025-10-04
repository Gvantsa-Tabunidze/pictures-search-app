'use client'

import useFetchImgs from '@/hooks/quries/useFetchImgs'
import React, { useCallback, useEffect, useState } from 'react'
import Card from './Card'
import ImgDiv from '../popUp/ImgDiv'
import useFetchSingleImg from '@/hooks/quries/useFetchSingleImg'
import SearchAndChips from '../filter/SearchAndChips'




export default function List() {
  const {data,isLoading, error, isFetchingNextPage, hasNextPage, fetchNextPage } = useFetchImgs()
  const [selectedId, setSelectedID] = useState<string| null>(null)
  const {data:singleImg } = useFetchSingleImg(selectedId!)

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
  if(error) return <div>Oops something's gone wrong</div>




  return (
    <div>
    {/* List of images */}
      <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {selectedId && singleImg ? <ImgDiv data={singleImg} onClose={onCloseDiv}/> : null}
      {data?.pages.flatMap((page,pageIndex)=>page.map((img)=> <Card key={`${pageIndex} - ${img.id}` } data={img} onClick={()=>openTheDiv(img.id)}/>))}
      <h2>{isFetchingNextPage ? 'Loading more pictures' : 'No more pictures to load'}</h2>
      </div>
    </div>
  ) 
}
