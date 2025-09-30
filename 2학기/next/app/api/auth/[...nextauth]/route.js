import NextAuth from "next-auth";
  import GithubProvider from "next-auth/providers/github";
  import GoogleProvider from "next-auth/providers/google";

  import { MongoDBAdapter } from "@auth/mongodb-adapter";
  import { connectDB } from "@/util/database";
  import CredentialsProvider from "next-auth/providers/credentials";
  import bcrypt from "bcrypt";

  export const authOptions = {
    providers: [
      GithubProvider({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      }),
      GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
      }),
      CredentialsProvider({
      //3-1. 로그인페이지 폼 자동생성해주는 코드
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
			//3-2. 로그인요청시 실행되는코드 (중요)
      async authorize(credentials) {
        let db = (await connectDB).db("board"); // 함수 호출로 수정
        let user = await db
          .collection("user_cred")
          .findOne({ email: credentials.email }); //DB에서 이메일 비교

        console.log("user", user);
        
        if (!user) return null;
        console.log("user",  credentials.password, user.password);
        const pwcheck = await bcrypt.compare(
          credentials.password, //입력한 password
          user.password //DB password
        );
        console.log("pwcheck", pwcheck);
        if (pwcheck) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //로그인 유지 30일
  },
    secret: process.env.NEXTAUTH_SECRET, // JWT 및 세션 암호화에 사용
    adapter: MongoDBAdapter(connectDB) // MongoDB에 사용자/세션 정보 저장
  };

  // NextAuth 핸들러 생성 및 GET/POST 메서드로 내보내기
  const handler = NextAuth(authOptions);

  export { handler as GET, handler as POST };