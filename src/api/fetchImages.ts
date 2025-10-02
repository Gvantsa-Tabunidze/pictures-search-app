'use client'

import axios from "axios";

const accessKey = 'OTrUY0LocW7gigjG4lski75l3KymzeCLcmbza_8A8eA'

export default async function fetchImages(){
    const picResponse = await axios({
    method:'GET',
    url:'https://api.unsplash.com/photos/',
    params:{
        client_id: accessKey,
        per_page:20,
        page:1
        
    },
})
    return picResponse.data
}
