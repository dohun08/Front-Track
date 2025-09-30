//app/api/post/[id]/route.js
import { updatePost, deletePost } from '@/data/post';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/util/database.js";
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
  const client = await connectDB;
  console.log("params.id", params.id);
  
  const db = client.db("board");
  const post = await db.collection("post").findOne({ _id: new ObjectId(params.id) });
  console.log("가져온 글 정보:", post);
  
  if (!post) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }
  return new Response(JSON.stringify(post), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function PUT(request, { params }) {
  const { title, content } = await request.json();
  const updated = updatePost(params.id, title, content);
  if (!updated) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }
  return new Response(JSON.stringify(updated), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);
  console.log("세션 정보:", session);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const client = await connectDB;
  const db = client.db("board");
  const { ObjectId } = require("mongodb");
  const post = await db.collection("post").findOne({ _id: new ObjectId(params.id) });
  console.log("삭제 대상 글 정보:", post);

  if (!post) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }

  // 사용자 정보 조회 (role 확인)
  const user = await db.collection("user_cred").findOne({ email: session.user.email });

  // 작성자이거나 어드민이면 삭제 가능
  if (post.author !== session.user.email && user?.role !== "ADMIN") {
    console.log("작성자/관리자 아님: 삭제 불가");
    return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
  }

  const deleted = await db.collection("post").deleteOne({ _id: new ObjectId(params.id) });
  console.log("삭제 결과:", deleted);

  if (!deleted.deletedCount) {
    return new Response(JSON.stringify({ error: "Delete failed" }), { status: 500 });
  }
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}