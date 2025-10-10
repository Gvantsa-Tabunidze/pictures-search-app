
import { NextRequest, NextResponse } from "next/server"
import axios from "axios"

export async function POST(req: NextRequest) {
  const { code } = await req.json()
  if (!code) return NextResponse.json({ error: "Code missing" }, { status: 400 })

  try {
    const res = await axios.post("https://unsplash.com/oauth/token", {
      client_id: process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID,
      client_secret: process.env.UNSPLASH_CLIENT_SECRET,
      redirect_uri: process.env.NEXT_PUBLIC_UNSPLASH_REDIRECT_URI,
      code,
      grant_type: "authorization_code",
    })
    return NextResponse.json(res.data)
  } catch (err) {
    return NextResponse.json({ error: "Token exchange failed" }, { status: 500 })
  }
}

