import React from 'react'
import FbImageLibrary from 'react-fb-image-grid'
import './ShowImageFacebook.css';
const ShowImageFacebook = props => {
    const {images}= props
    return (
        <div className = 'show__images'>
            <FbImageLibrary hideOverlay = {true} images={images}/>
        </div>
    )
}

export default ShowImageFacebook
