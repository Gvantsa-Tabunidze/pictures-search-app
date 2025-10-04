'use client'

import React, { useEffect, useState } from 'react'
import SearchAndChips from '../filter/SearchAndChips'
import List from './List'
import useFetchImgs from '@/hooks/quries/useFetchImgs'
import { usePathname, useSearchParams ,useRouter} from 'next/navigation'
import useDebounce from '@/hooks/debounce/useDebounce'



function FilterListWrapper() {
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
      }

      const filteredData  = data ? {
        ...data,
        pages:data.pages.map(page => page.filter(img => {
            const chipMatch = !activeChip || img.topic_submissions?.[activeChip.toLocaleLowerCase()]
            const searchMatch = !debouncedSearch || img.alt_description?.toLocaleLowerCase().includes(debouncedSearch.toLocaleLowerCase())
            return chipMatch && searchMatch;
        } )) 
      } : undefined




  return (
    <div>
      <SearchAndChips searchValue={search} onSearchChange={setSearch} selectedChip={activeChip} toggle={toggleChip}/> 
      <List data={filteredData} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} isLoading={isLoading} error={error}/>
    </div>
  )
}

export default FilterListWrapper
