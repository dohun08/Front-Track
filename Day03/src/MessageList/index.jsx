import './style.css'

//MessageList.jsx
const msgLists = ["안녕하세요. 오늘의 일정입니다.", 
    "점심시간이 11시 30분으로 변경되었습니다.",
    "이제 곧 회의가 시작됩니다."   
    ];
export default function MessageList(){
    return(
        <div>
            <h1>메시지 컴포넌트</h1>
            {msgLists.map(item=>
            <div className="wrapper">
                {item}
            </div>)}
        </div>
    )
}