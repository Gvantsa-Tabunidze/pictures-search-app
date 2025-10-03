export interface unsplashImage{
  id:string,
  title?:Description
  user?:User,
  urls: Urls,
  likes:number,
  width?:number,
  height?:number
}

interface User{
name:string,
bio?:string
}

interface Urls{
full?:string,
small:string
regular:string,
thumb?:string
}

interface Description{
alt_description:string
}