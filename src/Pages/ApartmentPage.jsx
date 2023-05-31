import React, { useEffect, useState } from 'react';
import { DescriptionPanel } from '../components/DescriptionPanel';
import "./ApartmentPage.scss";
import ImageBanner from '../components/ImageBanner';
import ApartmentHeader from '../components/ApartmentHeader';
import { useLocation } from 'react-router-dom';



function ApartmentPage() {
    const location = useLocation();
    const [flat,setFlat] = useState(null);
    useEffect(fetchApartmentData, []);

    function fetchApartmentData() {
    fetch("db.json")
    .then((res) => res.json())
    .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        setFlat(flat);
    })
    .catch(console.error);
}

    if (flat == null) return <div> Loading...</div> ;


    return (
        <div className="apartment-page">
            selected flat:{JSON.stringify(flat)}
            <ImageBanner imageUrl={flat.cover} />
            <ApartmentHeader flat={flat} />
            <div className="apartment_description_area">
                <DescriptionPanel />
                <DescriptionPanel />
            </div>
            </div>

    );
}

export default ApartmentPage;