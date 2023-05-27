import React from 'react'
import "./AppartmentGrid.scss";
import Apartment from "./Apartment.jsx";

function AppartmentGrid() {
  return (
    <div className='grid'> 
    <Apartment/>
    <Apartment/>
    <Apartment/>
    <Apartment/>
    </div>
  )
}

export default AppartmentGrid