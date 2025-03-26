import { useState } from "react";
import { posts } from "./data";
import './style.css'

const Post = ({auth, item, idx, deletePost, setCount})=>{
    return (
        <div key={idx} className="comment">
             <img className="avatar" src={item.avatar} />
             <div className="comment-details">
                 <h2 className="user-nam">{item.name}</h2>
             <p className="comment-text">{item.comment}</p>
             <div className="comment-details">
             <p className="comment-time">{item.time}</p>
             <p className="like-count">좋아요 수 : {item.like_count}</p>
             <button onClick={()=>setCount(item.name)} className="like-button">❤️</button>
             </div>
             </div>
             {auth.name === item.name && <button onClick={()=>deletePost(item.name)} className="delete-button ">삭제</button>}
         </div>
    )
}

export default function PostList(){
    const [data, setData] = useState(posts);
    const auth = {
        name : '오주현'
    }
    const deletePost = (name) =>{
        setData(data.filter(item=>name !== item.name));
    }
    const countLike = (name)=>{
        setData(prevData => {
            const updatedData = [...prevData];
            const itemIndex = updatedData.findIndex(item => item.name === name);
            
            if (itemIndex !== -1) {
                updatedData[itemIndex] = {
                    ...updatedData[itemIndex],
                    like_count: updatedData[itemIndex].like_count + 1
                };
            }
    
            return updatedData;
        });
    }
    
    return(
        <div className="comment-list">
           {data.map((item, idx) =>(
             <Post auth={auth} item = {item} idx={idx} deletePost={deletePost} setCount={countLike} />
           ))}
        </div>
    )
}