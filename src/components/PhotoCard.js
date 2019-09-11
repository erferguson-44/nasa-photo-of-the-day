import React from "react";

const PhotoCard = props => {

    return (
        <div className="photo-list" key={props.id}>
            <h2>title: {props.title}</h2>
            <p>{props.date}</p>
            <img src={props.url}/>
            <p>{props.explanation}</p>
            
        </div>
    )
}
export default PhotoCard;