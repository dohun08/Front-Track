### 1. 게시글 목록 조회

- MongoDB에서 게시글 전체를 불러와 리스트로 출력
- `find().toArray()`로 모든 게시글을 배열로 받아와 map으로 렌더링

```tsx
let result = await db.collection("post").find().toArray();
return (
  <div>
    {result.map((a, i) => (
      <div key={i}>{a.title}</div>
    ))}
  </div>
);
```

### 2. 게시글 상세 조회

- 게시글의 고유 id(ObjectId)로 하나의 게시글만 조회
- 상세 정보(제목, 내용)를 화면에 출력

```tsx
let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });
return (
  <div>
    <h3>{result.title}</h3>
    <div>{result.content}</div>
  </div>
);
```

### 3. 게시글 작성

- 클라이언트에서 fetch로 POST 요청을 보내 새 게시글을 생성
- 입력값(title, content)을 JSON으로 전송

```tsx
const res = await fetch("/api/post", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title, content }),
});
```

### 4. 게시글 수정

- PATCH/POST 요청에서 받은 데이터로 기존 게시글을 수정
- `updateOne`으로 title, content를 변경

```tsx
await db.collection("post").updateOne(
  { _id: new ObjectId(body._id) },
  { $set: { title: body.title, content: body.content ?? "" } }
);
```

### 5. 게시글 삭제

- 게시글의 id로 해당 게시글을 삭제
- `deleteOne`을 사용하여 DB에서 제거

```tsx
await db.collection("post").deleteOne({ _id: new ObjectId(body._id) });
```