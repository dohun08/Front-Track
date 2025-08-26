import { connectDB } from "@/util/database";
import styles from "./list.module.css";
import ListItem from "./listItem";
import ListItem2 from "./interaction";

export default async function List() {
  let client = await connectDB;
  const db = client.db("board");
  let result = await db.collection("post").find().toArray();

  return (
    <div className={styles.listBg}>
      <h2 className={styles.listTitle}>게시글 목록</h2>
      {result.map((a, i) => (
        <div className={styles.listItem} key={i}>
          <ListItem a={a} />
          <ListItem2 result={a}/>
        </div>
      ))}
    </div>
  );
}