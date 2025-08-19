import React, { useState } from "react";
import { produce } from "immer";


export default function ProfileForm() {
  // 중첩된 객체 구조를 갖는 상태 정의
  const [user, setUser] = useState({
    profile: {
      name: "",
      email: "", 
    },
  });

  // input 변경 핸들러: 불변성을 유지하며 직접 객체를 복사해서 갱신
  const handleChange = (e) => {
   // etarget값 가져오기
 
    setUser((currentUser) => (
       produce(currentUser, (draft)=>{
        draft.profile[e.target.name] = e.target.value
       })
     ));
  };

  // 간단한 form UI 구성
  return (
    <div style={{ padding: "20px" }}>
      <h2>프로필 수정</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>이름: </label>
          <input
            type="text"
            name="name"
            value={user.profile.name}
            onChange={(e)=>{
                setUser({
                    ...user,
                    profile :{
                        ...user.profile,
                        [e.target.name] : e.target.value
                    }
                })
            }}
          />
        </div>
        <div>
          <label>이메일: </label>
          <input
            type="email"
            name="email"
            value={user.profile.email}
            onChange={handleChange}
          />
        </div>
      </form>

      <hr />

      {/* 변경된 결과를 바로 확인할 수 있도록 출력 */}
      <h3>입력 결과</h3>
      <p>이름: {user.profile.name}</p>
      <p>이메일: {user.profile.email}</p>
    </div>
  );
}