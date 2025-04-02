import {useRef, useState} from "react";
import "./style.css";
import { produce } from "immer";
export default function UseRefAdd(){
	const [inputs, setInputs] = useState({
    name : '',
    email : '',
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
    const nextId =  useRef(4)//useRef로 4 설정
    const inputRef = useRef(null)
    // nextId값 1 증가
		const onChange =(e)=>{
            const {name, value} = e.target
            setInputs((current) =>
                produce(current, (draft) => {
                    draft[name] = value;
                })
            );
        }; //input값이 변경될때 iputs useState에 반영되도록 수정	
     return (
        <div>  
        <input name = "name" onChange={onChange } value={inputs.name} ref={inputRef} placeholder = "이름을 입력" />
        <input name = "email" onChange={onChange} value = {inputs.email}  placeholder = "이메일을 입력" />
       
			 <button onClick ={()=>{
                alert(`현재값은 ${inputRef.current.value}`)
                setUsers({...users, inputs})
             }}>확인</button> 
        <button onClick={()=>{
            setInputs({
                name : '',
                email : '',
            })
            inputRef.current.focus()
        }}>초기화</button>  
        
        
        </div>
        );
       
  }