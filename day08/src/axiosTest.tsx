import React, { useEffect, useState } from 'react';
import axios from 'axios';
interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
function FormPostExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // 서버로 POST 요청 보내는 함수
  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 기본 동작(새로고침) 막기

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name,
        email
      });

      console.log('서버 응답:', response.data);
      alert('데이터 전송 성공!');
    } catch (error) {
      console.error('에러 발생:', error);
      alert('전송 실패 😥');
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    if(isLoading){
        handleClick();
    }
    setIsLoading(false)
  }, [])

  const handleClick = async () =>{
    try{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${import.meta.env.VITE_API_KEY}`)
        setData(res.data)
    }catch(error){
        console.error(error)
    }
  }
  const [data, setData] = useState<WeatherData>()
  return (
    <div>
      <h2>사용자 정보 입력</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름 입력"
          />
        </div>
        <div>
          <label>이메일:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 입력"
          />
        </div>
        <button type="submit">제출하기</button>
      </form>
      { isLoading ? <div>loading...</div> : 
      <ul>
        <li>지역 {data?.name}</li>
        <li>날씨 {data?.weather[0].description}</li>
        <li>온도 {data?.main.temp}</li>
        <li>픙속 {data?.wind.speed}</li>
        <li>습도 {data?.main.humidity}</li>
        <li>위도 (lat): {data?.coord.lat}</li>
        <li>경도 (lon): {data?.coord.lon}</li>
      </ul>
      }
    </div>
  );
}

export default FormPostExample;