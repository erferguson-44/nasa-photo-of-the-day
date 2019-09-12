import React from "react";
import styled from "styled-components";

const PhotoBackground = ({urlSrc}) => {
    return (
        <div>
            <img id="bg" src={urlSrc} alt="space"/>
        </div>
    );
};
export default PhotoBackground;