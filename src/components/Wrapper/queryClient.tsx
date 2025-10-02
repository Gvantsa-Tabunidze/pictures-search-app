'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import List from "../list/List"



const queryClient = new QueryClient()

export default function TanstackQueryWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <List/>
    </QueryClientProvider>
  )
}