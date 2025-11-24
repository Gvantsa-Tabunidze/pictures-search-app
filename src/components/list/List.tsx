'use client'

import Card from './Card'
import ImgDiv from '../popUp/ImgDiv'
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
  if (error) return <div>{`Oops something's gone wrong`}</div>


  return (
    <div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {hookData.selectedId && hookData.singleImg ? <ImgDiv  key={hookData.selectedId} data={hookData.singleImg} onClose={hookData.onCloseDiv} /> : null}
        {data?.pages.flatMap((page,pageIndex)=>page.map((img)=>
          <div key={`${pageIndex} - ${img.id}` } className="mb-4 break-inside-avoid">
            <Card  data={img} onClick={()=>hookData.openTheDiv(img.id)}/>
          </div>
          ))}
      </div>
      <h2>{isFetchingNextPage ? 'Loading more pictures' : 'No more pictures to load'}</h2>
    </div>
  ) 
}
