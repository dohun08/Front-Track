// app/api/post/new/route.js
export async function POST(request) {

  let session = await getServerSession(authOptions); //2-1. session 정보가져오기
  console.log(session)
  try {
      const formData = await request.formData();
      // formData의 entries를 객체로 변환 (key-value 쌍으로 변환)
       let body = Object.fromEntries(formData.entries());
      if (session) {
        body.author = session.user.email; //2-2. body 정보에 author 추가
        body.authorId = session.user.id; // 세션의 id 등록
      }
    } catch (error) {
        console.error(error);
    }
}