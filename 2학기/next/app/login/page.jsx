"use client"
// app/layout.js
import Image from 'next/image'
import { useSession } from 'next-auth/react'

export default function Page(){
  let value  = useSession();
  if (value) {
    console.log(value.data)
  }
  if(!value?.data?.user?.image) return null;
  return(
    <div>
        <Image
            src={value?.data?.user?.image || ""}
            alt={value?.data?.user?.name}
            width={100}
            height={100}
         />
         <p>{value?.data?.user?.name}</p>
    </div>
  )
}