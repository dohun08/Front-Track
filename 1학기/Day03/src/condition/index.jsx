import {useState} from "react";
import './style.css'
const cars = ['Ford', 'BMW', 'Audi'];

function GoalAnd({goal}) {
   
  return (
        <div>
            {goal && <p>골성공</p>}
        </div>
  );


}
//   Ternary Operator(삼항 연산자)
//   조건 ? 참일때 실행할 요소 : 거짓일때 실행할 요소
  function GoalTernary({goal}) {
    
return (
        <div>
            {goal ? <p>골성공</p> : <p>골실패</p>}
        </div>
    );



}
//   Logical && Operator
//   조건이 참(truecy) 이면 && 왼쪽 요소를 실행함.
  function Garage() {
     
    return (
        <div>
            {cars.length && <p>{cars.length} 대 만큼 차가 있습니다.</p>}
        </div>
    );
}

export default function ConditionTest(){
    const [goal,setGoal] = useState(false);

     return (
        <div>
            <button onClick={()=>setGoal(!goal)}>골성공</button>
            <GoalAnd goal = {goal} />
            <GoalTernary goal = {goal}  />
            <Garage />
        </div>
    );
    
    

}