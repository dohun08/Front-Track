import React, { useState, useRef, useEffect  } from "react";
import './style.css'

export default  function UseEffect1() {
    const [inputs, setInputs] = useState({name : '', nickname : ''})
    const [depname, setDepname] = useState('');
    const [isModal, setIsModal] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsModal(false)
        }, 3000);
        return ()=>{
            alert("언마운트됨");
        }
    }, [])

    useEffect(()=>{
        console.log(`effect 함수 변경 후 이름${depname}`);
        return () =>{
            console.log(`effect 함수 변경 전 이름 ${depname}`)
        }
    }, [depname])
    const onChangehandeler = (e) => {
    const { name, value } = e.target;   
    setInputs((prev) => ({
        ...prev,
        [name]: value,
    }));
    };
  return (
    <div>
      <div>
        <input value={inputs.name} name="name" onChange={onChangehandeler}  /> 

        <input value={inputs.nickname} name="nickname" onChange={ onChangehandeler} />
        <button onClick ={()=>setDepname(inputs.name)}>이름 출력</button>
      </div>

      <div>
        <div>
          <b>이름:</b> {inputs.name}
        </div>
        <div>
          <b>닉네임:</b> {inputs.nickname}
        </div>
        {isModal &&
           <div className="conduct">
            useEffect 실습입니다.
           </div>
        }
      
        
       </div>
     </div>
  );
}
