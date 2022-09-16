import React from "react"


export default function Travel(props) {
    return (
        <div>
            <div className="container-body">
                <img src={props.imageUrl} className="image"/>
                <div className="details">
                    <p className="location"> <i className="fa-sharp fa-solid fa-location-dot"></i> {(props.location).toUpperCase()} <small className="google"><a  href={props.googleMapsUrl} target="_blank"> View in Google Maps</a></small></p>
                    <h1 className="title"> {props.title}</h1>
                    <h3 className="date">{props.startDate} - {props.endDate} </h3>
                    <p className="description"> {props.description}</p>
                </div>
            </div>
        </div>
    )
}