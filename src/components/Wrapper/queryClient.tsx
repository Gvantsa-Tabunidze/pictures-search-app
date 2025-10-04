'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import List from "../list/List"
import SearchAndChips from "../filter/SearchAndChips"
import { useEffect, useState } from "react"
import { useSearchParams, useRouter, usePathname} from "next/navigation"



const queryClient = new QueryClient()

export default function QueryWrapper() {
const searchParams = useSearchParams()
const router = useRouter()
const pathname = usePathname()


//Initialize state form URL
  const [search, setSearch] = useState(searchParams.get('search') || '')
  const [activeChip, setActiveChip] = useState<string| null>(searchParams.get('category') || null)

// Update URL when filters change
useEffect(()=>{
  const params = new URLSearchParams()
  if(search) params.set('search', search)
  if(activeChip) params.set('category', activeChip.toString())
  router.replace( `${pathname}${params.toString() ? `?${params.toString()}` : ''}`)
}, [search, activeChip, router])




  const toggleChip = (label:string| null)=>{
    setActiveChip(prev=>prev === label ? null : label)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SearchAndChips searchValue={search} onSearchChange={setSearch} selectedChip={activeChip} toggle={toggleChip}/> 
      <List/>
    </QueryClientProvider>
  )
}