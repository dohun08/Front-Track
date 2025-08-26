"use client";

import { useRef } from "react";

export default function Write() {
  const titleRef = useRef();
  const contentRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    const res = await fetch("/api/post/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      alert("글이 등록되었습니다.");
      window.location.href = "/list";
    } else {
      alert("등록 실패");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="글제목" ref={titleRef} />
      <input name="content" placeholder="글내용" ref={contentRef} />
      <button type="submit">전송</button>
    </form>
  );
}