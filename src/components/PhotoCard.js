import React from "react";

import styled from 'styled-components';

const PhotoCard = ({header, date, photographer, description, urlSrc, id}) => {

    return (
        <div className="nasaDiv" key={id} style={       {backgroundImage:`url(${urlSrc})`,
            backgroundPosition: `center`,
            backgroundRepeat:`no-repeat`,
            backgroundSize: `cover`}
        }>
            <div className="divContainer"> 
                <h1><a href="https://www.nasa.gov/">NASA!</a></h1>
                <h1>NASA!</h1>
                <p>( We do Photos too! )</p>
                <h2>title: {header}</h2>
                <p>{date}</p>
                <p>{photographer}</p>
                <p>{description}</p>
                <p>{id}</p>
           </div>
        </div>
    )
}
export default PhotoCard;