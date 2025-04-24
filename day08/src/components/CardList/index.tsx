import { Room } from "../../rooms"
import "../../index.css"

export default function CardList({data} : {data : Room[]}){
    return(
        <div id="container">
            <div className="wrapper">
            {data.map(item=>{
                return(
                    <div className='box'>
                        <div className="card">
                            <img className='boximage' src={item.image} />
                            <p className='title'>{item.name}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}