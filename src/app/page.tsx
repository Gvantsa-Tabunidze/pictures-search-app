
import fetchImages from "@/api/fetchImages";
import QueryWrapper from "@/components/QueryWrapper/queryClient";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";



export default async function Home() {
  //Pre-fetch first page on server
  const queryClient = new QueryClient()
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['imgs'],
    queryFn: ({ pageParam = 1 }) => fetchImages(pageParam, 20),
     initialPageParam: 1,
  });
  const dehydratedState = dehydrate(queryClient)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12">
      <h1 className='text-4xl font-bold mb-4'>Discover minimalism photography</h1>
      <h3 className='text-lg mb-6'>Search across millions of curated images. </h3>
      <Suspense fallback={<div>Loading...</div>}>
        <QueryWrapper dehydratedState={dehydratedState} />
      </Suspense>
    </div>
  );
}
