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
topics?: TopicSubmissions
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
    topics:rawData.topic_submissions
  }
}



export function ParseImagesList(rawList:unsplashImage[]):ParsedImage[] {
return Array.isArray(rawList) ? rawList.map(ParseImage) : []
}



