import { useState } from "react"
import './DarkMode.css';

export default function DarkMode(){
    const [isDark, setDark] = useState(false);
    return(
        <div className={`container ${isDark ? "light" : "dark"}`}>
                <h1>다크모드예제</h1>
            <p>현재 모드는 {isDark ? "다크모드" : "라이트모드"} 입니다.</p>
            <button onClick={()=>{
                setDark(!isDark)
            }} className="toggle-btn">
            {!isDark ? "🌙 다크모드" : "☀️ 라이트모드"}로 변경 
            </button>
        </div>
    )
}