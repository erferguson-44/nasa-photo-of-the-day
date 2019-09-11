import React, {useState, useEffect} from "react";

import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoList (){

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)

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
                title={photos.title}
                url={photos.url}
                date={photos.date}
                explanation={photos.explanation}/>
        </div>
    )
}