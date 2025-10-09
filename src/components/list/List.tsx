'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Card from './Card'
import ImgDiv from '../popUp/ImgDiv'
import useFetchSingleImg from '@/hooks/quries/useFetchSingleImg'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import { ParsedImage } from '@/api/parser/imgParsers'
import useInfiniteScrollHook from '@/hooks/infiniteScrollHook/useInfiniteScrollHook'


interface ListProps {
data: InfiniteData<ParsedImage[]> | undefined, 
isLoading:boolean,
isFetchingNextPage:boolean,
hasNextPage:boolean,
fetchNextPage:()=>void
error:unknown
}

export default function List({data,error,fetchNextPage,hasNextPage,isFetchingNextPage,isLoading}:ListProps) {
  
  const hookData = useInfiniteScrollHook({
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error
  })

  if(isLoading) return <div>Loading . . .</div>
  if(data){
    console.log(data)
  } 
  if(hookData.singleImg) {
    console.log(hookData.singleImg)
  }
  if(error) return <div>Oops something's gone wrong</div>


  return (
    <div>
    {/* List of images */}
      <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {hookData.selectedId && hookData.singleImg ? <ImgDiv key={hookData.selectedId} data={hookData.singleImg} onClose={hookData.onCloseDiv} /> : null}
      {data?.pages.flatMap((page,pageIndex)=>page.map((img)=> <Card key={`${pageIndex} - ${img.id}` } data={img} onClick={()=>hookData.openTheDiv(img.id)}/>))}
      <h2>{isFetchingNextPage ? 'Loading more pictures' : 'No more pictures to load'}</h2>
      </div>
    </div>
  ) 
}
