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

  const handleDelete =  async (id) => {
    //delete api실행
    await fetch(`/api/post/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(() => fetchPosts())
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