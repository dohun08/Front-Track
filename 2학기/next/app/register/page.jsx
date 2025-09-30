"use client";
import { useState } from "react";
import {useRouter} from "next/navigation";

export default function Register() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault(); // 페이지 새로고침 방지

    const formData = new FormData(e.target);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message);

    if (data.success) {
      router.push("/login"); 
    }
  };

  return (
    <div className="write-form-container">
      <h4 className="write-form-title">회원가입</h4>
      <form onSubmit={handleSubmit} className="write-form">
        <input name="name" type="text" placeholder="이름" className="write-input" />
        <input name="email" type="text" placeholder="이메일" className="write-input" />
        <input name="password" type="password" placeholder="비밀번호" className="write-input" />
        <button type="submit" className="write-btn">가입하기</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}