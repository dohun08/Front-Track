'use client';

import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import Link from "next/link";
import Comment from "./comment";
import CommentList from "@/app/post/[id]/commentList";

export default function PostDetail() {
  const {id} = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [commentRefresh, setCommentRefresh] = useState(0); // Add refresh state

  // 게시글 데이터 가져오기
  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/post/${id}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  // 댓글 목록 새로고침
  const refreshComments = () => {
    setCommentRefresh(prev => prev + 1);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetchPost();
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <div>로딩중...</div>;
  if (!post || post.error) return <div>글을 찾을 수 없습니다.</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div className="mb-8 p-4 bg-white rounded shadow">
        <p className="whitespace-pre-line">{post.content}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">댓글</h2>
        <CommentList key={commentRefresh} _id={post._id}/>
        <Comment _id={post._id} onCommentSubmit={refreshComments}/>
      </div>

      <div className="flex space-x-4 mt-8">
        <Link href={"/list"} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          목록으로
        </Link>
        <Link
          href={`/post/${id}/edit`}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          수정
        </Link>
      </div>
    </div>
  );
}