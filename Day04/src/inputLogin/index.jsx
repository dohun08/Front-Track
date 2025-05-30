/*InputTest1.jsx */
import { useState } from "react";
import './style.css'
export default function InputTest1(){
   //객체 생성하기
   const userData = {
    id : 1,
    name : '',
    email : ''
   }
   //2. useState이용하여 객체 반영하기
  const [user, setUser] = useState(userData);
  const [isModal, setIsModal] = useState(false);
   const submit = (e)=>{
    setIsModal(true)
   }
   const change = (e)=>{
    setUser({...user, [e.target.name] : e.target.value})
   }
    return (
    <div>
       <form method="post">
        <h1> 로그인</h1>

            <li >이름<input type = "text" name="name" onChange={e=>change(e)} /></li>
            <li>이메일<input type = "email" name="email" onChange={e=>change(e)} /></li>
            {console.log(user)}
            <li><button type = "button" onClick ={(e)=>submit(e)}>확인 </button>
            <button onClick={()=>setUser({...userData, id : 1,name : '',email : ''})}>취소</button></li>
     </form>
     {isModal && 
       <div id = "modal">
             입력된 이름은 <span>{user.name}</span>이고 입력된 이메일은 <span>{user.email}</span>
       </div>}
    </div>
);

}