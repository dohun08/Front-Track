
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPage({ params, initialData }) {
  const router = useRouter();
  const [title, setTitle] = useState(initialData.title);
  const [content, setContent] = useState(initialData.content);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/post/edit", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: initialData._id,
          title,
          content,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("수정 완료!");
        router.push(`/detail/${initialData._id}`);
      } else {
        alert("수정 실패: " + (data.error ?? "알 수 없는 오류"));
      }
    } catch (err) {
      console.error(err);
      alert("오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>게시글 수정</h2>
      <div>
        <label>제목:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
      </div>
      <div>
        <label>내용:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", height: "200px", marginBottom: "1rem" }}
        />
      </div>
      <button onClick={handleSave} disabled={loading}>
        {loading ? "저장 중..." : "저장"}
      </button>
    </div>
  );
}