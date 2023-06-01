import React from 'react'
import "./ImageBanner.scss"

function ImageBanner(props) {
    const imageUrl = props.imageUrl ? props.imageUrl : "./about_cover.png";
    return (
        <div className='image_banner'>
            <img src={imageUrl} alt="" />
        </div>)
}

export default ImageBanner