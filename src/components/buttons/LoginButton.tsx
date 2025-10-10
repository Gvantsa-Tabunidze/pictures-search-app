
'use client'

export const LoginButton = () => {
  const handleLogin = () => {
    window.location.href =
      `https://unsplash.com/oauth/authorize` +
      `?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}` +
      `&redirect_uri=${process.env.NEXT_PUBLIC_UNSPLASH_REDIRECT_URI}` +
      `&response_type=code` +
      `&scope=public+write_likes`
  }

  return (
    <button
      onClick={handleLogin}
      className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-400 transition"
    >
      Login with Unsplash
    </button>
  )
}
