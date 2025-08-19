import './style.css'
import { produce } from "immer";
import { useState, useRef } from 'react';
//배열 항목 수정하기
//6-3. UserDelete파일을 복사하여 UserModify.jsx파일을 작성하시오.
// 1.serModify 컴포넌트를 만들고 users 배열 안의 객체 안에 selected 라는 속성을 추가하시오.(모두 false)
function SerModify({name, email,id,selected, onModify, deleteStudent, onToggle}){
    return (
        <>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
           {selected ? 
           <button className="control" onClick={()=>{
            onModify(id, {name, email})
         }}>수정완료</button> :  <>
          <button className="control" onClick={()=>{
              deleteStudent(id)
           }}>삭제</button>
           <button className="control2" onClick={()=>{
              onToggle(id, {name, email})
           }}>수정</button>
         </>}
        </td>
        </>
      );
}
export default function UserModify(){
    const [inputs, setInputs] = useState({
      name : '',
      email : '',
      id : 0
   });
   const [users, setUsers] = useState([ //1. selected항목 추가 토글 속성
    {
      id: 1,
      name: '강민지',
      email: 'strongminji@gmail.com',
      selected : false,
    },
    {
      id: 2,
      name: '정소울',
      email: 'soulright@bssm.hs.kr',
      selected:false,
    },
    {
      id: 3,
      name: '이승현',
      email: 'victorynow@example.com',
      selected : false,
    }
  ]);
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
// 2. onToggle함수를 만드시오.
// 1) 리스트에 있는 이름 클릭하면 selected속성을 변경하시오.
// 2) 리스트에 있는 이름을 클릭하면 input에 현재 클릭된 user값을 보이게 하시오.
    const onToggle = (id, user)=>{ //2. 1)이름 클릭하면 selected속성 반전 2) input에 현재값 반영하기
        
        setUsers(users.map(item=>{
            
            return item['id'] === id ? {...item, selected : true} : item
        }))
    
        setInputs({
          name : user.name,
          email : user.email,
          id : id
        })
      }
    // (문제)User 컴포넌트에서 방금 넣어준  selected 값이 참이면 따라 폰트의 색상을 파랑으로 바꾸시오.

    // 3. [수정] 버튼을 누르면 현재 input에 있는 값으로 users데이터를 수정하는 onModify 함수를 작성하오. (onToggle응용)
   const onModify = (id, user)=>{ //3.   1)수정 버튼 누르면 input의 값으로 user수정하기 2) input clear
        setUsers(users.map((item)=>{
            
            return item.id === id ? {name : name, email : email, id : id, selected:false} : item
        }))
        
        setInputs({
            name : '',
            email : '',
            id : 0
        })
    }
    const {name, email} = inputs;
       const nextId = useRef(4);
    const onChange =(e)=>{ //input에 반영될 내용 수정
        setInputs((currunt)=>(
           produce(currunt, (draft)=>{
               draft[e.target.name]=e.target.value
           })
        ))
  };
    return(
        <div className="container">
        <input name = "name" onChange={onChange } value={name} placeholder = "이름을 입력" />
        <input name = "email" onChange={onChange } value = {email}  placeholder = "이메일을 입력" />
        <button onClick ={onCreate}>등록</button>  
        <table>
            <tr>
                <th>연번</th>
                <th>이름</th>
                <th>이메일</th>
            </tr>
            {
         users.map(item=>(
            <tr><SerModify key={item.id} {...item} onToggle={onToggle} onModify={onModify} deleteStudent={deleteStudent}></SerModify></tr>
         ))
        }
                
        </table>
      
        </div>
    )
}