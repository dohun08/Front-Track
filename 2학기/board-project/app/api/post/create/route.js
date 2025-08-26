/* app/api/post/create/route.js */
import { connectDB } from "@/util/database.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // JSON 요청 body 읽기
    const body = await request.json();

    console.log(body)
    if (!body.title) {
      return NextResponse.json({ error: "제목은 필수입니다." }, { status: 400 });
    }

    const client = await connectDB;
    const db = client.db("board");

    await db.collection("post").insertOne({
      title: body.title,
      content: body.content ?? "",
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}