/* app/detail/[id]/page.js */
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import styles from "../../list/list.module.css";

export default async function Detail(props) {
  let client = await connectDB;
  const db = client.db("board");

  // string → ObjectId 변환
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  if (!result) {
    return (
      <div className={styles.listBg}>
        <h2 className={styles.listTitle}>상세페이지</h2>
        <div className={styles.listItem}>
          <div>❌ 게시글을 찾을 수 없습니다.</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.listBg}>
      <h2 className={styles.listTitle}>상세페이지</h2>
      <div
        className={styles.listItem}
        style={{
          padding: "2rem",
          borderRadius: "16px",
          background: "#f8fafc",
          boxShadow: "0 2px 8px #eee",
        }}
      >
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          {result.title}
        </h3>
        <div
          style={{
            background: "#f1f5f9",
            padding: "1rem",
            borderRadius: "8px",
            color: "#333",
          }}
        >
          {result.content}
        </div>
      </div>
    </div>
  );
}