'use client'

import fetchSingleImg from '@/api/fetchSingleImg'
import { ParsedImage } from '@/api/parser/imgParsers'
import { unsplashImage } from '@/interfaces/img-interface'
import { useQuery } from '@tanstack/react-query'


const useFetchSingleImg = (id:string) => {
    const singleResult = useQuery<ParsedImage>({
        queryKey:['oneimg', id],
        queryFn:()=>fetchSingleImg(id),
        enabled:!!id
    })
  return singleResult
}

export default useFetchSingleImg
