/* app/api/post/edit/route.js */
import { connectDB } from "@/util/database.js";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// App Router 방식에 맞게 PATCH 메서드로 작성
export async function PATCH(request) {
  try {
    const body = await request.json();
    console.log(body);
    if (!body._id || !body.title) {
      return NextResponse.json({ error: "필수값 누락" }, { status: 400 });
    }

    const client = await connectDB;
    const db = client.db("board");

    const result = await db.collection("post").updateOne(
      { _id: new ObjectId(body._id) },
      { $set: { title: body.title, content: body.content ?? "" } }
    );

    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
