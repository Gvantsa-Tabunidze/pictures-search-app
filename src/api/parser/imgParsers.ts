import { unsplashImage } from "@/interfaces/img-interface"

export interface ParsedImage{
id:string,
alt:string | undefined,
imgSrc:string,
thumb:string | undefined,
author: string,
likes: number
width?: number
height?: number
topics?: TopicSubmissions,
userName: string |undefined,
userBio:string | undefined,
available:boolean | undefined,
igUsername:string | undefined,
location:string | undefined
}


interface TopicSubmissions {
  [topicName: string]: TopicSubmission
}

interface TopicSubmission{
status: 'approved' | 'rejected'
approved_on?: string
}


export function ParseImage(rawData:unsplashImage):ParsedImage {
  return {
    id:rawData.id,
    alt:rawData.alt_description ?? '',
    imgSrc:rawData.urls.regular ?? '',
    thumb:rawData.urls.thumb,
    author: rawData.user?.name ?? 'Unknown',
    likes:rawData.likes,
    width:rawData.width,
    height:rawData.height,
    topics:rawData.topic_submissions,
    userName: rawData.user?.name,
    userBio:rawData.user?.bio,
    available:rawData.user?.for_hire,
    igUsername:rawData.user?.instagram_usernam,
    location:rawData.user?.location
  }
}



export function ParseImagesList(rawList:unsplashImage[]):ParsedImage[] {
return Array.isArray(rawList) ? rawList.map(ParseImage) : []
}



