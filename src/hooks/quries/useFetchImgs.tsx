'use client'

import fetchImages from "@/api/fetchImages"
import { unsplashImage } from "@/interfaces/img-interface"
import { useQuery } from "@tanstack/react-query"

const useFetchImgs = ()=>{
    const imgResult = useQuery<unsplashImage[]>({
    queryKey:['imgs'],
    queryFn: fetchImages
})
  return imgResult
}

export default useFetchImgs