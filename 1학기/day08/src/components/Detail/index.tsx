//<DetailTab.jsx>  
import React, { useContext, useState } from "react";
import { Nav } from 'react-bootstrap';
import { useParams }from "react-router-dom";
import {Rooms, Room} from "../../rooms.ts";
import { Context1, MyContextType } from "../../App.tsx";

export default function DetailTab() {
 let { id } = useParams(); //useParams()를 이용하여 파라미터로 id 받기
 const room: Room | undefined = Rooms?.find(room => room.key === Number(id));
 console.log(room)
 const [tab, setTab] = useState("link0");
 const {theme, toggleTheme} = useContext(Context1) as MyContextType;

 //3. 탭변경 state변수 tab저장하기
 return (
   <main style={{backgroundColor: theme ? "black" : "white"}}>
    <button onClick={toggleTheme}>change</button>
    {room && 
    <div className="container">
       <div className="box image">
         <img src={room.image} className="boximage" alt="Room" />
       </div>
       <div className="box">
         <div className="location">{room.name} </div>
         <div className="location">{room.location}에 위치</div>
         
         <hr />
         <div className="guest">최대인원{room.totalGuest} 명</div>
         <div className="rating">
           평점: {room.rating}{" "}
           <span className="visits">({room.numberOfRating})</span>
         </div>
         <div className="price">
           {room.price} 원<span className="month">/ month</span>
         </div> 
        </div>
     </div>
    }


     <Nav variant="tabs" defaultActiveKey="link0" onSelect={(selectedKey) => setTab(selectedKey || 'link0')}>
       <Nav.Item>
         <Nav.Link eventKey="link0">
           상세정보
         </Nav.Link>
       </Nav.Item>
       <Nav.Item>
         <Nav.Link eventKey="link1">
           리뷰
         </Nav.Link>
       </Nav.Item>
       <Nav.Item>
         <Nav.Link eventKey="link2">
           상품Q&A
         </Nav.Link>
       </Nav.Item>
     </Nav>


      <TakeContent tab={tab} />
      
   </main>
 );
}



export const TakeContent = ({tab} : {tab : string}) =>{
    return (
        <div>
             {tab === "link0" && <div>
         <p>
           5~9층에 위치한 스탠다드룸은 편안함과 쾌적함이 인상적이 휴식 환경을
           제공합니다.
         </p>
         <p>
           모던한 아름다움과 신라호텔 수준의 고급 침구 및 침대 그리고 고급
           어메니티로 한 단계 업그레이드 된 휴식을 경험하십시오.
         </p>
         <br /> 위치 :5~9층
         <br />
         룸구성 : 침실 1, 욕실 1
         <br />
         문의전화 : 02-2230-0700
       </div>}
      {tab === "link1" && <div>내용1</div>}
      {tab === "link2" && <div>내용2</div>}
        </div>
    )
}