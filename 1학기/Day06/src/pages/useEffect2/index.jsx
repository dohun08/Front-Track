import React, { useState, useRef, useEffect  } from "react";
import './style.css'

export default  function UseEffect2() {
  const [count,setCount] = useState(0);
    useEffect(()=>{
      console.log("================")
      console.log("컴포넌트 마운티드")
    }, [])
    useEffect(()=>{
      console.log("================")
      console.log("useEffect가 실행됨")
      console.log(`is Full ${0<=count<=10}`)
      console.log(`현재인원 수 : ${count}`)
    }, [count])

  return (
    <div>
      <p>총 {count} 명 수용했습니다.</p>
      <div>
        <button onClick={()=>setCount(count+1)}>입장</button>
        <button onClick={()=>setCount(count-1)}>퇴장</button>
      </div>
     </div>
  );
}
