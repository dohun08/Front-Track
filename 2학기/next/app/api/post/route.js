//app/api/post/route.js
import { getPosts, addPost } from '@/data/post';
import {NextResponse} from "next/server";

export async function GET() {
  const posts = getPosts();
  return NextResponse.json(posts);
}

export async function POST(request) {
  const { title, content } = await request.json();
  const post = addPost(title, content);
  return NextResponse.json(post);
}