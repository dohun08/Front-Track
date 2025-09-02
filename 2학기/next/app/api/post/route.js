//app/api/post/route.js
import {NextResponse} from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/util/database.js";
// 1️⃣ 배열 직접 반환
export async function GET() {
  try {
  
    const client = await connectDB; // 함수 호출로 수정
    const db = client.db("board");
    const posts = await db.collection("post").find().toArray();
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    // JSON 요청 body 읽기
    const body = await request.json();
    if (!body.title) {
      return NextResponse.json({ error: "제목은 필수입니다." }, { status: 400 });
    }

    // 세션에서 작성자 정보 가져오기
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "로그인 필요" }, { status: 401 });
    }

    const client = await connectDB;
    const db = client.db("board");

    await db.collection("post").insertOne({
      title: body.title,
      content: body.content ?? "",
      author: session.user.email, // 작성자 정보 추가
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}