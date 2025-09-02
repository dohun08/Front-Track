import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"; //1-1
//주요기능
//깃헙 로그인기능 만들기 (OAuth 로그인)
 
export const authOptions = {
  providers: [
  // //1-2. 깃헙 로그인 기능 설정
    GithubProvider({
      clientId: 'Github에서 발급받은ID',
      clientSecret: 'Github에서 발급받은Secret',
    }),
  ],
  secret : 'jwt생성시쓰는암호' //1-3
};
export default NextAuth(authOptions); 
