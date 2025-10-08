'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation"
import useDebounce from "../debounce/useDebounce"
import { useEffect, useState } from "react"
import useFetchImgs from "../quries/useFetchImgs"




function useFilterListHook() {
    const {data,isLoading, error, isFetchingNextPage, hasNextPage, fetchNextPage } = useFetchImgs()
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    //Initialize state form URL
    const [search, setSearch] = useState(searchParams.get('search') || ''  )
    const [activeChip, setActiveChip] = useState<string| null>(searchParams.get('category') || null)
    // Debounced search
    const debouncedSearch = useDebounce(search, 500);

    // Update URL when filters change
    useEffect(()=>{
    const params = new URLSearchParams()
    if(search) params.set('search', search)
    if(activeChip) params.set('category', activeChip.toString())
    router.replace( `${pathname}${params.toString() ? `?${params.toString()}` : ''}`)
    }, [search, activeChip, router, pathname])



    const toggleChip = (label:string| null)=>{
        setActiveChip(prev=>prev === label ? null : label)
        console.log(label)
    }



    //convert chips to unsplash slug
    function toSlug(label: string) {
      return label
        .toLowerCase()
        .replace(/\s+/g, '-') // spaces → dashes
        .replace(/[^\w-]+/g, ''); // remove non-word chars
    }

    const filteredData  = data ? {
        ...data,
        pages:data.pages.map(page => page.filter(img => {
            const slug = activeChip ? toSlug(activeChip) : null
            const chipMatch = !slug || (img.topics && img.topics[slug] && img.topics[slug].status === 'approved')
         
            const searchMatch = !debouncedSearch || img.alt?.toLocaleLowerCase().includes(debouncedSearch.toLocaleLowerCase())
            return chipMatch && searchMatch;
        } )) 
    } : undefined



  return {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    filteredData,
    toggleChip,
    activeChip,
    search,
    setSearch
  }
}

export default useFilterListHook
