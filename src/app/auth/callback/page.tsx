'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import useAuthStore from "@/store/authStore"
import toast from "react-hot-toast"



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

  return <div>Logging in...</div>
}
