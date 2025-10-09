import React, { useCallback, useEffect, useState } from 'react'
import useFetchSingleImg from '../quries/useFetchSingleImg'
import { InfiniteData } from '@tanstack/react-query'
import { ParsedImage } from '@/api/parser/imgParsers'


interface useListHook {
data: InfiniteData<ParsedImage[]> | undefined, 
isLoading:boolean,
isFetchingNextPage:boolean,
hasNextPage:boolean,
fetchNextPage:()=>void
error:unknown
}


function useInfiniteScrollHook({data,error,fetchNextPage,hasNextPage,isFetchingNextPage,isLoading}:useListHook) {
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


  


  return {
    selectedId,
    setSelectedID,
    data,
    singleImg,
    onCloseDiv,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    openTheDiv
  }
}

export default useInfiniteScrollHook