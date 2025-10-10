'use client'


import { ParsedImage } from "@/api/parser/imgParsers"
import axios from "axios"
import toast from "react-hot-toast"
import { create } from "zustand"

interface FavsStore{
    favs:ParsedImage[],
    toggleFav:(img:ParsedImage)=>Promise<void>,
    fetchFavs:()=>Promise<void | undefined>
}

const useFavorites = create<FavsStore>((set, get)=>({
    favs:[],
    toggleFav: async(img)=>{
        const accessToken = localStorage.getItem('unsplash_token')
            if(!accessToken) {
                toast.error('Please log in first!')
            return
            }
        
        const exists = get().favs.some(favImg => favImg.id === img.id)
        const method = exists ? 'DELETE' : 'POST'

        try {
            await axios({
                url:`https://api.unsplash.com/photos/${img.id}/like`,
                method,
                headers:{
                   Authorization: `Bearer ${accessToken}`
                }
            }),
            set({
                favs: exists ? get().favs.filter(f=> f.id !== img.id) : [...get().favs, img]
            })

            toast.success(exists ? "Removed from favorites" : "Added to favorites")
        } catch (error) {
            console.error("Failed to toggle favorite", error)
            toast.error("Something went wrong")
        }
    },

    //Fetch favorites form API
    fetchFavs:async()=>{
    const accessToken = localStorage.getItem('unsplash_token')
    if (!accessToken) return
    try {
         const res = await axios.get('https://api.unsplash.com/me/likes', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      set({ favs: res.data })
    } catch (error) {
       console.error("Failed to fetch favorites", error)
    }
    }
}))

export default useFavorites