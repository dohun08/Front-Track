import { useState } from 'react'
import './style.css'
import Profile from '../assets/profile.png';

function Comment({comment, deleteComment}){
    const [isLike, setIsLike] = useState(0);
    const [isUnLike, setIsUnLike] = useState(0);
    return(
        <div className='wrapper'>
            <img src={Profile} />
            <div>
                <p className='nameText'>{comment.name}</p>
                <p className='commentText'>{comment.comment}</p>
                <div>
                    <span onClick={()=>setIsLike(isLike+1)}>👍🏾 : {isLike}  </span>
                    <span onClick={()=>setIsUnLike(isUnLike+1)}>👎🏾 : {isUnLike}</span>
                </div>
            </div>
            <button onClick={()=>{deleteComment(comment.name)}}>삭제</button>
        </div>
    )
}
export default function CommentList(){
    const comments = [
        {
            name : '김민성',
            comment : '하이 나 김민성'
        },
        {
            name : '박다온',
            comment : '리액트로 프로제트 만들고 있어요'
        },
        {
            name : '백도준',
            comment : '리액트 재밋다'
        },
    ]
    const [data, setData] = useState(comments)
    function deleteComment(id){
        setData(data.filter(item=>item.name !== id))
    }
    return(
        <div className="contentontainer">
            {data.map(item=>
                <Comment comment = {item} deleteComment={deleteComment} />
            )}
        </div>
    )
}