'use client'
import { ParsedImage } from '@/api/parser/imgParsers'
import { faDownload, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Loader from '../Loader/Loader'
import useImgHook from '@/hooks/imgHook/useImgHook'




interface ImgDivProps {
    data: ParsedImage,
    onClose: () => void,
   
}
function ImgDiv({onClose, data}:ImgDivProps) {  
const {divRef,imgLoader,setImgLoader} = useImgHook(onClose)


   

 return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-40">
      <div
        ref={divRef}
        className="bg-white w-full max-w-[1200px] h-[80vh] p-12 flex flex-col rounded-2xl shadow-lg z-50 box-border"
        >
        
        {imgLoader && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <Loader />
            </div>
        )}

        <div className="flex justify-between w-full mb-4 flex-none">
            <h2 className="text-lg font-bold">{data?.alt}</h2>
            <div className="flex gap-2">
            <button className="px-3 py-2 border border-purple-950 rounded-full hover:bg-purple-300 text-purple-950 transition">
                <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="px-3 py-2 border border-purple-950 rounded-full hover:bg-purple-300 text-purple-950 transition">
                <FontAwesomeIcon icon={faDownload} />
            </button>
            </div>
        </div>

       
        <div className="relative w-full flex-1 flex  justify-center overflow-hidden">
            <Image  src={data.imgSrc ?? '/image-not-found'}
                alt={`picture of ${data?.alt}`}
                fill 
                style={{ objectFit: 'contain' }} 
                sizes="100vw"  
                onLoad={()=>setImgLoader(false)}/>
        </div>
      </div>
    </div>
  )
}

export default ImgDiv
