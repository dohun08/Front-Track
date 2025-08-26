import { connectDB } from "@/util/database.js";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function DELETE(request) {
  try {
    const body = await request.json();
    if (!body._id) {
      return NextResponse.json({ error: "필수값 누락" }, { status: 400 });
    }

    const client = await connectDB;
    const db = client.db("board");

    const result = await db.collection("post").deleteOne({
      _id: new ObjectId(body._id)
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
