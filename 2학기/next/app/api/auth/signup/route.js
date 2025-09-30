// app/api/auth/signup/route.js
import { connectDB } from "@/util/database.js";
import bcrypt from "bcrypt"; // 꼭 import 해줘야 함
import { NextResponse } from "next/server";


export async function POST(request) {
  const formData = await request.formData();
  console.log("받은 데이터:", formData);

  try {
    // 이름, 이메일, 비밀번호 빈칸 체크
    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("password")
    ) {
      return NextResponse.json({ success: false, message: "로그인하세요" }, { status: 400 });
    }

    const client = await connectDB;
    const db = client.db("board");

    // 이메일 중복 확인
    const existingUser = await db.collection("user_cred").findOne({ email: formData.get("email") });
    if (existingUser) {
      return NextResponse.json({ success: false, message: "이미 존재하는 이메일입니다." }, { status: 409 });
    }

    // 🔑 비밀번호 해싱
    const hash = await bcrypt.hash(formData.get("password"), 10);
    console.log("해싱된 비밀번호:", hash);

    await db.collection("user_cred").insertOne({
      name: formData.get("name"),
      password: hash,
      email: formData.get("email"),
      role: "ADMIN" // 역할 필드 추가
    });

    return NextResponse.json({ success: true, message: "회원가입 성공" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "회원가입 실패" }, { status: 500 });
  }
}