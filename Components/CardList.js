import React from "react"
import Card from "./Card"
import data from "../data.js"
export default function CardList(){
    return(
        <div className="card-list">
            {data.map(item => {
                return <Card item={item} />
            })}
        </div>
    )
}