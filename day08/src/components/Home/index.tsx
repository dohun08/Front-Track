import {Rooms} from "../../rooms.ts";
import Router from "../Router";
import "../../index.css"
import { useState } from "react";
import axios from 'axios'

const Home = () => {
    const [rooms, setRooms] = useState(Rooms);
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
                    <div key={item.key} className='box'>
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