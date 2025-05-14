import {Rooms} from "../../rooms.ts";
import Router from "../Router";
import "../../index.css"
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [rooms, setRooms] = useState(Rooms);
    const navigate = useNavigate();
    const getRoom = () =>{
        axios.get('https://mikki32sw.github.io/airanb/data.json')
        .then(res=>{
            setRooms([...rooms, ...res.data])
            
        })
        .catch((err)=>{
            console.error(err)
        })
    }
  return (
    <>
      <Router />
      <div className="wrapper">
            {rooms.map(item=>{
                return(
                    <div key={item.key} className='box' onClick={()=>navigate(`/detail/${item.key}`)}>
                        <div className="card">
                            <img className='boximage' src={item.image} />
                            <p className='title'>{item.name}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        <button onClick={()=>getRoom()}>더보기</button>
     </>
  );
};
export default Home;