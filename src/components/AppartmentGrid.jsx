import React, { useEffect, useState } from 'react';
import "./AppartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";

function AppartmentGrid() {
  const [apartments, setApartments] = useState([]);
  
  useEffect(() => {
    fetchApartments();
  }, []);
  
  function fetchApartments() {
    fetch('db.json')
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }
  
  return (
    <div className='grid'> 
      {apartments.map((apartment) => (
        <div className="card-wrapper" key={apartment.id}>
          <ApartmentCard title={apartment.title} imageUrl={apartment.cover} id={apartment.id} />
        </div>
      ))}
    </div>
  );
}

export default AppartmentGrid;
