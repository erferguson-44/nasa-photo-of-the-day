import React from "react";

import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


const PhotoCard = ({header, date, photographer, description, urlSrc, id}) => {

    return (
        <div className="nasaDiv" key={id} style={       {backgroundImage:`url(${urlSrc})`,
            backgroundPosition: `center`,
            backgroundRepeat:`no-repeat`,
            backgroundSize: `cover`}
        }>
        <div style={{paddingTop:"75vh"}}>

            <div className="topRow">
                <h2 style={{
                    fontSize: '3rem', 
                    fontWeight: "100", 
                    margin: "0%"}}>04:31</h2>
            </div>

            <h3 style={{
                fontSize: '1rem', 
                fontWeight: "300", 
                margin: "0%"}}>{header}
            </h3>
            <p style={{
                fontSize: '.5rem', 
                fontWeight: "300", 
                margin: "0%"
            }}>NASA photo of the day by:{photographer}
            </p>

            <button onClick={modalClick}>Description</button>
            <Modal isOpen={modal} toggle={modalClick} >
                <ModalHeader>About the Image</ModalHeader> 
                <ModalBody>
                 {photographer}
                </ModalBody>  
                <ModalFooter>
                    <Button color="secondary" onClick={modalClick}>Cancel</Button>
                </ModalFooter>
            </Modal>
           </div>
        </div>
    )
}
export default PhotoCard;