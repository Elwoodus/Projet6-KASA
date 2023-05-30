import React from 'react'
import "./AppartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";

function AppartmentGrid() {
  return (
    <div className='grid'> 
    <ApartmentCard/>
    <ApartmentCard/>
    <ApartmentCard/>
    <ApartmentCard/>
    </div>
  );
}

export default AppartmentGrid