'ise client'

import useFetchImgs from '@/hooks/quries/useFetchImgs'
import React from 'react'
import Card from './Card'


export default function List() {
  const {data,isLoading, error} = useFetchImgs()

  if(isLoading) return <div>Loading . . .</div>
  if(data){
    console.log(data)
  }



  return (
    <div>
     {data?.map((el)=> <Card title={el.title} user={el.user} urls={el.urls} key={el.id} likes={el.likes} height={el.height} width={el.width} />)}
    </div>
  )
}
