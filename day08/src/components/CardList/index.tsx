import { Room } from "../../rooms"
import Card from "../Card"
import "../../index.css"

export default function CardList({data} : {data : Room[]}){
    console.log(data)
    return(
        <div id="container">
            <div className="wrapper">
            {data.map(item=>{
                return(
                   <Card {...item} />
                )
            })}
            </div>
        </div>
    )
}