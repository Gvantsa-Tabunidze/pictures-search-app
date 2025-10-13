'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import useAuthStore from "@/store/authStore"
import toast from "react-hot-toast"
import Loader from "@/components/Loader/Loader"



export default function AuthCallback() {
  const router = useRouter()
  const setToken = useAuthStore((state) => state.setToken)

  useEffect(() => {
    
    const code = new URLSearchParams(window.location.search).get("code")
    if (!code) return
    const getAccessToken=async()=> {
        try {
            const res = await axios.post('/api/auth/unsplash', {code})
            console.log("Token response:", res.data)
            const token = res.data.access_token
            setToken(token)
            toast.success('Logged in successfully!')
            // redirect to home page
            router.push("/")
        } catch (error) {
            console.error("Token exchange failed", error)
            toast.error('Login failed')
        }
    }
    getAccessToken()
  }, [router, setToken])

  return <div className="flex flex-col items-center justify-center min-h-screen space-y-2"><Loader/>Logging in...</div>
}
