  import NextAuth from "next-auth";
  import GithubProvider from "next-auth/providers/github";
  import GoogleProvider from "next-auth/providers/google";

  import { MongoDBAdapter } from "@auth/mongodb-adapter";
  import { connectDB } from "@/util/database";

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
    ],
    secret: process.env.NEXTAUTH_SECRET, // JWT 및 세션 암호화에 사용
    adapter: MongoDBAdapter(connectDB) // MongoDB에 사용자/세션 정보 저장
  };

  // NextAuth 핸들러 생성 및 GET/POST 메서드로 내보내기
  const handler = NextAuth(authOptions);

  export { handler as GET, handler as POST }; 