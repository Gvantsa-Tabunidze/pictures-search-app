'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import FilterListWrapper from "../list/FilterListWrapper"



const queryClient = new QueryClient()

export default function QueryWrapper() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <FilterListWrapper/>
    </QueryClientProvider>
  )
}