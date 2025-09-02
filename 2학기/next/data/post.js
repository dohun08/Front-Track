let posts = [
  { id: 1, title: "첫 번째 글", content: "이것은 첫 번째 게시글입니다." },
  { id: 2, title: "두 번째 글", content: "이것은 두 번째 게시글입니다." },
  { id: 3, title: "세 번째 글", content: "이것은 세 번째 게시글입니다." }
];

export function getPosts() {
  return posts;
}

export function getPost(id) {
  return posts.find(p => p.id === Number(id));
}

export async function addPost(title, content, author) {
  const client = await connectDB();
  const db = client.db("form"); // DB 이름에 맞게 수정
  const post = {
    title,
    content,
    author, // 작성자 정보 추가
  };
  const result = await db.collection("posts").insertOne(post);
  post._id = result.insertedId;
  return post;
}

export function updatePost(id, title, content) {
  const idx = posts.findIndex(p => p.id === Number(id));
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], title, content };
  return posts[idx];
}

export function deletePost(id) {
  const idx = posts.findIndex(p => p.id === Number(id));
  if (idx === -1) return false;
  posts.splice(idx, 1);
  return true;
}