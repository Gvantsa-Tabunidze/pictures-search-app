'use client'

import { DehydratedState, QueryClient, QueryClientProvider,  hydrate } from "@tanstack/react-query"
import FilterListWrapper from "../list/FilterListWrapper"


interface QueryWrapperProps {
  dehydratedState: DehydratedState
}

const queryClient = new QueryClient()

export default function QueryWrapper({dehydratedState}:QueryWrapperProps) {
  
  if (dehydratedState) {
    hydrate(queryClient, dehydratedState)
  }

  return (
    <QueryClientProvider client={queryClient}>
       <FilterListWrapper />
    </QueryClientProvider>
  )
}