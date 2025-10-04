export interface unsplashImage{
  id:string,
  title?:Description
  user?:User,
  urls: Urls,
  likes:number,
  width?:number,
  height?:number,
  category?:TopicSubmissions
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

interface TopicSubmissions {
  [topicName: string]: TopicSubmission
}

interface TopicSubmission{
status: 'approved' | 'rejected'
approved_on?: string
}


