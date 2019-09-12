import React from "react";

import styled from 'styled-components';

const PhotoCard = ({header, date, photographer, description, urlSrc, id}) => {

    return (
        <div className="nasaDiv" key={id} style={{backgroundImage:`url(${urlSrc})`,
        backgroundPosition: `center`,
        backgroundRepeat:`no-repeat`,
        backgroundSize: `cover`}
        }>
           {/* <h1>NASA! We do Photos too</h1> */}
           <h2>title: {header}</h2>
           <p>{date}</p>
           <p>{photographer}</p>
           <p>{description}</p>
           <p>{id}</p>
        </div>
    )
}
export default PhotoCard;