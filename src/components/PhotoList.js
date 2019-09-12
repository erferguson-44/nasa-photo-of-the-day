import React, {useState, useEffect} from "react";

import axios from "axios";
import PhotoCard from "./PhotoCard";
import styled from 'styled-components';




export default function PhotoList (){

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=prWLscQbjlZ18HX9Ebuyr04zjOh85gI1amra8xUd`)

        .then(response => {
            const photos = response.data;
            console.log("NASA Photo of Day", photos)
            setPhotos(photos)
        })

        .catch(error => {
            console.log("SpaceForce!", error)
        })
    },[]);

    return (
        <div className="photo">
                <PhotoCard
                header={photos.title}
                urlSrc={photos.url}
                date={photos.date}
                description={photos.explanation}/>
        </div>
    )
}