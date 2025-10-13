export interface unsplashImage{
  id:string,
  alt_description?:string | undefined
  user?:User,
  urls: Urls,
  likes:number,
  width?:number,
  height?:number,
  topic_submissions?:TopicSubmissions,
}

interface User{
name:string,
bio?:string,
for_hire?:boolean,
instagram_usernam?:string,
location:string
}

interface Urls{
full?:string,
small:string
regular:string,
thumb?:string
}



interface TopicSubmissions {
  [topicName: string]: TopicSubmission
}

interface TopicSubmission{
status: 'approved' | 'rejected'
approved_on?: string
}


