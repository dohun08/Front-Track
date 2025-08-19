import {Room} from '../../rooms.ts';
import '../../index.css'
import { useNavigate } from 'react-router-dom';

export default function Card(props : Room){
    const navigate = useNavigate()
    console.log(props);
    
    return(
        <div className='box' onClick={()=>navigate(`/detail/${props.key}`)}>
             <div className=''>
            <img className='boximage' src={props.image} />

            <h2 className='title'>{props.name}</h2>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
        </div>
    )
}