/* /app/list/page.js  */
'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ListPage() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await fetch('/api/post')
    .then(res => res.json())
    .then(data => setPosts(data));
  };

  useEffect(() => {
    //fetchPosts 실행
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    const res = await fetch(`/api/post/${postId}`, {
      method: "DELETE",
    });
    if (res.status === 403) {
      alert("작성자만 삭제할 수 있습니다.");
      return;
    }
    if (res.ok) {
      // 삭제 성공 시 목록 갱신 등 처리
      fetchPosts();
    } else {
      alert("삭제에 실패했습니다.");
    }
  };
  if(!posts) return;

  return (
    <main>
      <h1>게시물 목록</h1>
      <ul>
        {posts?.map(post => (
          <li key={post._id}>
            <Link href={`/post/${post._id}`}>{post.title}</Link>
            <div>{post.content}</div>
            <button className="button" onClick={() => handleDelete(post._id)}>삭제</button>
            <span className = "button"><Link href={`/post/${post.id}/edit`}>수정</Link></span>
          </li>
        ))}
      </ul>
    </main>
  );
}