import './style.css'
import {useState} from "react";

function InputText() {
    const [value, setValue] = useState('');
    const handleClick = ()=>{
        setValue('');
    }
  return (
    <>
        <div>
            <input
                type={"text"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type={"button"} onClick={handleClick}>초기화</button>
        </div>
        {value &&
            <div className={"modal"}>
                <p>입력한 값은 <span style={{color:'red'}}>{value}</span> 입니다</p>
            </div>}

    </>
  )
}

export default InputText
