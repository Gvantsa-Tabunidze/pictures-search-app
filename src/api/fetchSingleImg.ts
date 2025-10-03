import { unsplashImage } from "@/interfaces/img-interface";
import axios from "axios";

const accessKey = 'OTrUY0LocW7gigjG4lski75l3KymzeCLcmbza_8A8eA'

//Single image
export default async function fetchSingleImg(id:string){
    const singleImg = await axios({
        method:'GET',
        url:`https://api.unsplash.com/photos/${id}`,
        params:{
          client_id: accessKey,
        }
    })
    return singleImg.data
}