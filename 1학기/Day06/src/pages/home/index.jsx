import React from 'react';

function Home() {
  return (
  <>
      <h1>홈 페이지입니다.</h1>
      <button onClick={() => navigate("/about")}>자기소개로</button> {"  "}
      <button onClick={() => navigate(-1)}> 뒤로가기 </button> {"  "}
  </>
)
}

export default Home;