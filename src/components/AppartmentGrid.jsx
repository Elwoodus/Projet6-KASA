import React, { useEffect, useState } from 'react'
import "./AppartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";


function AppartmentGrid() {
  const [apartments, setApartments] = useState([]);
  
  useEffect(fetchApartments, []);
  //useEffect avec une array vide == execute cette fonction au chargement du composant 
  
  function fetchApartments() {
    fetch ('db.json')
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error);
    
  }
  return (
    <div className='grid'> 
    {apartments.map((apartment) => (
    <ApartmentCard title={apartment.title} imageUrl={apartment.cover} id={apartment.id} />
    ))}
    </div>
  );
}

export default AppartmentGrid