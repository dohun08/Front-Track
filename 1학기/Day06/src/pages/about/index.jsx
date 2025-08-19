import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <>
    <h1>소개 페이지입니다.</h1>;
    <button onClick={() => navigate("/home")}>홈으로</button> {"  "}
      <button onClick={() => navigate(-1)}> 뒤로가기 </button> {"  "}
    </>
  )
}

export default About;