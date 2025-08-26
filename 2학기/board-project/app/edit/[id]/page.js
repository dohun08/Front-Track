import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";
import EditPage from "./EditPage"; // Client Component

export default async function Page({ params }) {
  const client = await connectDB;
  const db = client.db("board");
  const post = await db.collection("post").findOne({ _id: new ObjectId(params.id) });

  // _id는 Client로 보내기 위해 string으로 변환
  const initialData = {
    title: post.title,
    content: post.content,
    _id: post._id.toString(),
  };

  return <EditPage params={params} initialData={initialData} />;
}

