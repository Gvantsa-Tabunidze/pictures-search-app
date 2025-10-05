'use client'

interface ImageProps{
 src: string, 
 width?: number, 
 quality?: number 
}


function ImageLoader({ src, width, quality }: ImageProps) {
  return   `${src}?w=${width || 800}&q=${quality || 75}&fit=max`
  
}

export default ImageLoader
