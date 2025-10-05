
import fetchImages from "@/api/fetchImages";
import QueryWrapper from "@/components/QueryWrapper/queryClient";
import { dehydrate, QueryClient } from "@tanstack/react-query";



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
    <div className='min-h-screen flex flex-col items-center text-center px-4'>
     <h1 className='text-4xl font-bold mb-4'>Discover minimalism photography</h1>
     <h3 className='text-lg mb-6'>Search across millions of curated images. </h3>
     <QueryWrapper dehydratedState={dehydratedState} />
     
    </div>
  );
}
