import {useRef, useState} from "react";
import "./style.css";
import { produce } from "immer";

const User = ({name, email,id, deleteStudent}) => { //props로 객체를 받는 경우 {객체명}
     
    return (
      <div className="wrapper">
         <b>{name}</b> <span>{email}</span>  <button className="control" onClick={()=>{
            deleteStudent(id)
         }}>삭제</button>
      </div>
    );
}
 
export default function UserAdd(){
  const [inputs, setInputs] =useState({
    name : '',
    email : '',
    id : 0
});
    const [users, setUsers] = useState([
        {
          id: 1,
          name: '강민지',
          email: 'strongminji@gmail.com'
        },
        {
          id: 2,
          name: '정소울',
          email: 'soulright@bssm.hs.kr'
        },
        {
          id: 3,
          name: '이승현',
          email: 'victorynow@example.com'
        }
      ]);

  
   const {name, email} = inputs;
   const nextId = useRef(4);

   const onChange =(e)=>{ //input에 반영될 내용 수정
         setInputs((currunt)=>(
            produce(currunt, (draft)=>{
                draft[e.target.name]=e.target.value
            })
         ))
   };
    const onCreate =()=>{
        //배열 복사하고 요소 추가
        setInputs({...inputs, id : nextId.current})
        nextId.current +=1;
        setUsers([...users, inputs])
        setInputs({
            name : '',
            email : '',
            id : 0
        })
    }
    const deleteStudent =(id)=>{
        setUsers(users.filter(item=>item.id!==id))
    }
    
     return (
        <div className="container">
        <input name = "name" onChange={onChange } value={name} placeholder = "이름을 입력" />
        <input name = "email" onChange={onChange } value = {email}  placeholder = "이메일을 입력" />
        <button onClick ={onCreate}>등록</button>  
        {
         users.map(item=>(
            <User key={item.id} {...item} deleteStudent={deleteStudent}></User>
         ))
        }
        </div>
        
        );
       
  }
