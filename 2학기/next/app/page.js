// app/page.js
"use client"
import {useState} from "react";
export default function Home() {
  const [isReady, setReady] = useState(false);
  return (
    <main>
      <h1>게시판</h1>
      <h2 onClick={()=>setReady(true)}>게시판 홈입니다.</h2>
      {isReady && <video className={"vvv"} autoPlay loop muted playsInline src={"/ss.webm"}></video>}
    </main>
  );
}
