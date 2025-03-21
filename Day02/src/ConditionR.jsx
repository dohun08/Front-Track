import './ConditionR.css'
import {useState} from "react";

export default function ConditionR(){
    const [isLogin, setLogin] = useState(false);
    return(
        <div className={'box'}>
            {!isLogin ? <button className={'btn1'} onClick={()=>setLogin(!isLogin)}>로그인</button> :  <div>
                <p>환영합니다~~</p>
                <button className={'btn2'} onClick={()=>setLogin(!isLogin)}>로그아웃</button>
            </div>}

            <hr />
            <p>모두함께 리액트 공부</p>

        </div>
    )
}