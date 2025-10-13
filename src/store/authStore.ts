'use client'

import { create } from "zustand"

interface AuthStoreInterface{
    token: string | null,
    setToken:(t:string |null)=>void,
    logout:()=>void,
}

const useAuthStore = create<AuthStoreInterface>((set)=>({
    token: null,
    setToken:(t)=>{
        if(t) localStorage.setItem('unsplash_token', t)
        else localStorage.removeItem('unsplash_token')
        set({token:t})
    },
    logout:()=>{
        localStorage.removeItem('unsplash_token')
        set({token:null})
    }
    
}))
export default useAuthStore