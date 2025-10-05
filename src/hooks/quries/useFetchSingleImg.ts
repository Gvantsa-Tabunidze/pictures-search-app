'use client'

import fetchSingleImg from '@/api/fetchSingleImg'
import { unsplashImage } from '@/interfaces/img-interface'
import { useQuery } from '@tanstack/react-query'


const useFetchSingleImg = (id:string) => {
    const singleResult = useQuery<unsplashImage>({
        queryKey:['oneimg', id],
        queryFn:()=>fetchSingleImg(id),
        enabled:!!id
    })
  return singleResult
}

export default useFetchSingleImg
