

import { unsplashImage } from "@/interfaces/img-interface";
import axios from "axios";

const accessKey = 'OTrUY0LocW7gigjG4lski75l3KymzeCLcmbza_8A8eA'

//All images
export default async function fetchImages(page:number, perPage=20) :Promise<unsplashImage[]>{
    const picResponse = await axios<unsplashImage[]>({
    method:'GET',
    url:'https://api.unsplash.com/photos/',
    params:{
        client_id: accessKey,
        per_page:perPage,
        page
    },
})
    return picResponse.data
}





