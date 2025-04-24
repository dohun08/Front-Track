import {Room} from '../../rooms';
import '../../index.css'

export default function Card(props : Room){
    return(
        <div className='box'>
             <div className=''>
            <img className='boximage' src={props.image} />

            <h2 className='title'>{props.name}</h2>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
        </div>
    )
}