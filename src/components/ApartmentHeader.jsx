import React from 'react';
import "./ApartmentHeader.scss";



function ApartmentHeader(props) {
    const flat = props.flat;
    const name = flat.host.name;
    const [firstName, lastName] = name.split(" ");
    return (
        <div className='apartment_header'>
            <div className='apartment_title'>
                <h1>{flat.title}</h1>
                <h2>{flat.location} </h2>
                <div className='apartment_tags'>
                    {flat.tags.map((tag) => (<span>{tag}</span>))}
                </div>
            </div>
            <div className="apartment_owner">
                <div className='apartment_owner_details'>
                    <h3>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </h3>
                    <div className="apartment_owner_badge">
                        <img src={flat.host.picture} alt="" />
                    </div>
                </div>
                <div className='apartment_owner_stars'>
                    <span className='on'>★</span>
                    <span className='on'>★</span>
                    <span className='on'>★</span>
                    <span className='off'>★</span>
                    <span className='off'>★</span>
                </div>
            </div>
        </div>
    )
}

export default ApartmentHeader