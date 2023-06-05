import React, { useState } from 'react';
import "./ImageBanner.scss";

function ImageBanner(props) {
    const pictures = props.pictures;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    return (
        <div className='image_banner'>
            <div className='carousel'>
                {pictures.map((pic, index) => (
                    <img
                        key={pic}
                        src={pic}
                        alt=""
                        className={`carousel__image ${index === currentIndex ? 'active' : ''}`}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    />
                ))}
            </div>
            {!props.hideNavigation && ( // Ajouter cette condition pour afficher les chevrons uniquement si hideNavigation est défini sur false ou non spécifié
                <>
                    <img
                        src="chevron_carousel_left.png"
                        alt="Previous"
                        className="carousel__prev"
                        onClick={handlePrevImage}
                    />
                    <img
                        src="chevron_carousel_right.png"
                        alt="Next"
                        className="carousel__next"
                        onClick={handleNextImage}
                    />
                </>
            )}
        </div>
    );
}

export default ImageBanner;
