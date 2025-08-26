import { connectDB } from "@/util/database.js"
import styles from "./list/list.module.css";

export default async function Home() {
  let client = await connectDB  
  const db = client.db('board') 
  let result = await db.collection('post').find().toArray()

  return (
    <div className={styles.listBg}>
      <h2 className={styles.listTitle}>홈페이지</h2>
      <div className={styles.listItem}>
        <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>환영합니다!</h3>
        <p style={{ color: "#555" }}>게시판 프로젝트에 오신 것을 환영합니다.</p>
      </div>
    </div>
  );
}
