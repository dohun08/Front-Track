import { useEffect, useState } from 'react'
import axios from "1학기/Day07/src/axios.jsx"

export default function App() {
    const [tests, setTests] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/test/")
        .then((res) => {
            console.log(res);
            setTests(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            {
                tests.map((item) => {
                    return (
                        <>
                            <div>이름 : {item.name}</div>
                            <div>단계 : {item.desc}</div>
                            <hr />
                        </>)
                })
            }
        </>
    )
}