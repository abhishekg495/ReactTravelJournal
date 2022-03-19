import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.item.imageUrl} className="card-image"/>
            <div className="card-content">
                <span className="card-location">
                    <i className="fa-solid fa-location-dot"></i>
                    {props.item.location.toUpperCase()}
                    <a href={props.item.googleMapsUrl}>
                        View on Google Maps
                    </a>
                </span>
                <h1 className="card-title">{props.item.title}</h1>
                <span className="card-duration">
                    {props.item.startDate} - {props.item.endDate}
                </span>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}