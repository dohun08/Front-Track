/* app/layout.jsx */
import Link from "next/link";
import LoginBtn from "@/components/loginButton"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Providers from "@/components/provider";

export default async function RootLayout({ children }) {

    const session = await getServerSession(authOptions);
  if (session) {
    console.log('세션출력' + JSON.stringify(session));
  }
   return (
    <html lang="en">
      <body>
       <Providers>
      <div className="navbar">
        <Link href="/" className="logo">BSSM board</Link> 
        <Link href="/list">글목록</Link> 
        <LoginBtn></LoginBtn>
    </div>
       {children}
       </Providers>
      </body>
    </html>
  );
}