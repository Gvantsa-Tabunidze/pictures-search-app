'use client'
import { ParsedImage } from '@/api/parser/imgParsers'
import { faCircleCheck, faDownload, faHeart } from '@fortawesome/free-solid-svg-icons'
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
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center  z-40">
      <div
        ref={divRef}
        className="bg-white w-full max-w-[1200px] min-h-[80vh] p-12 flex flex-col rounded-2xl shadow-lg z-50 box-border overflow-y-auto"
        >
        
        {imgLoader && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <Loader />
            </div>
        )}
        <div className='flex justify-between mb-4 items-start'>
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-bold">{data?.author}</h2>
                <small className='text-purple-600'>{data.available ?  
                  <>
                    Available for hire <FontAwesomeIcon icon={faCircleCheck} />
                  </> : null}
                </small>
            </div>
            <button className='px-5 py-2 border border-purple-950 text-purple-950 rounded-lg hover:bg-purple-400 transition"'>Donwload <FontAwesomeIcon icon={faDownload}/></button>
        </div>

        <div className="relative mb-4 flex justify-center overflow-hidden" style={{height:'80vh'}}>
            <Image  src={data.imgSrc ?? '/image-not-found'} width={data.width} height={data.height}
                alt={`picture of ${data?.alt}`}
                style={{ objectFit: 'contain' }} 
                sizes="100vw"  
                onLoad={()=>setImgLoader(false)}/>
        </div>
        <p className='text-sky-950'>{data.userBio}</p>
        <p>{data.userName}</p>
        <p className='text-sm'>{data.igUsername}</p>
        <p className='text-zinc-400'>{data.location}</p>
      </div>
    </div>
  )
}

export default ImgDiv
