import { useEffect, useState } from 'react';

export default function AsyncAwait() {
  const [error, setError] = useState(null); // 에러 메시지 저장용 상태

  const increase = (number)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const result = number + 10;
            if (result > 0){
                const e = new Error("50보다 큰수");
                return reject(e);
            }
            return resolve(result)
        }, 1000);
    })
  }
  useEffect(()=>{

    runTask();
  }, [])
  const runTask = async()  =>{
    try{
        let result = 0;
        for(let i=0; i<4; i++){
            result = await increase(result);
            console.log(result)
        }
    }catch(error){
        setError(error.message)
        console.error(error)
    }
  }
  return (
    <div>
      <h1>Promise 객체 Test (async/await)</h1>
      {error && <p style={{ color: 'red' }}>에러 발생: {error}</p>}
    </div>
  );
}