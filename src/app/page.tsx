
import QueryWrapper from "@/components/Wrapper/queryClient";



export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center text-center px-4'>
     <h1 className='text-4xl font-bold mb-4'>Discover minimalism photography</h1>
     <h3 className='text-lg mb-6'>Search across millions of curated images. </h3>
     <QueryWrapper />
     
    </div>
  );
}
