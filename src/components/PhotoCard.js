import React from "react";

const PhotoCard = props => {

    return (
        <div className="photo-list" key={props.id}>
            <h2>title: {props.title}</h2>
            <img src={props.url}/>
            <p>{props.date}</p>
        </div>
    )
}
export default PhotoCard;