import React, { useState } from "react";
import axios from "1학기/Day07/src/axios.jsx";

export default function AxiosTest() {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [photos, setPhotos] = useState([]);
	/*
	 getPromise ,getAsync,getPhotos 함수를 작성하시오.

  */
 const getPromise = () =>{
    axios
    .get("https://jsonplaceholder.typicode.com/comments/1")
    .then((response) => {
        setData2(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
 }
 const getAsync = async () =>{
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        if(res.status === 200){
            setData(res.data)
        }
    }catch(err){
        console.error(err)
    }
 }
 const getPhotos = async () =>{
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
        if(res.status === 200){
            setPhotos(res.data)
        }
    }catch(err){
        console.error(err)
    }
 }
  return (
    <main>
      <div>
        <h3>Axios 테스트해보기</h3>
        <button onClick={getPromise}>Promise로 불러오기</button>
           <p />
        <button onClick={getAsync}>async/await로 불러오기</button>
        <p />
        <button onClick={getPhotos}>async/await로 사진 불러오기</button>
      </div>
      {data && 
      <div>
        <h2>data</h2>
        <p>{data.title}</p>
        <p>{data.id}</p>
        <p>{data.userId}</p>
      </div>
      }
      {data2 &&  <div>
        <h2>data2</h2>
        <p>{data2.name}</p>
        <p>{data2.email}</p>
        <p>{data2.body}</p>
      </div>}
      {photos[0] &&
      <div>
      <h2>photos</h2>
      <p>{photos[0].title}</p>
      <p>{photos[0].url}</p>
      <img src={photos[0].thumbnailUrl} />
    </div>
      }

    </main>
  );
}
