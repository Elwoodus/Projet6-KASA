import React from 'react'
import "./AppartmentGrid.css";
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