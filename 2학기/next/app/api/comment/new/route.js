import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { ObjectId } from "mongodb";

export async function POST(request) {
  try {
    // 1. 세션 확인
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: '로그인이 필요합니다.' }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. 요청 본문 파싱 및 유효성 검사
    const body = await request.json();
    if (!body.comment?.trim()) {
      return new Response(JSON.stringify({ error: '내용을 입력해주세요.' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. 댓글 데이터 생성
    const commentData = {
      content: body.comment,
      parent: new ObjectId(body._id),
      author: session.user.email,
      createdAt: new Date()
    };

    // 4. DB에 댓글 저장
    const db = (await connectDB).db("board");
    const result = await db.collection("comment").insertOne(commentData);

    // 5. 성공 응답
    return new Response(JSON.stringify({
      success: true,
      comment: {
        _id: result.insertedId,
        ...commentData
      }
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('댓글 작성 중 오류 발생:', error);
    return new Response(JSON.stringify({ 
      error: '댓글 작성 중 오류가 발생했습니다.',
      details: error.message 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
