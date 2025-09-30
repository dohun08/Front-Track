"use client"
import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'

export default function LoginBtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button onClick={() => signOut()}>로그아웃</button>
    )
  }

  return (
    <div>
      <button onClick={() => signIn("credentials")}>로컬 로그인</button>
      <button onClick={() => signIn("google")}>구글 로그인</button>
      <button onClick={() => signIn("github")}>깃허브 로그인</button>
    </div>
  )
}
