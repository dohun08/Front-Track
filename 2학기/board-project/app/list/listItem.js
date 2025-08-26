"use client"

import Link from "next/link"
export default function ListItem({a}) {

    return(
        <div className="list-item">
            <Link href={'/detail/'+a._id}>
                <h4>{a.title}</h4>
            </Link>
            <p>{a.content}</p>
        </div>
    )
}