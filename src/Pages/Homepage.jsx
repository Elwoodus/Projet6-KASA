import React from 'react';
import "./Homepage.scss";
import Banner from '../Layout/Banner.jsx';
import AppartmentGrid from '../components/AppartmentGrid.jsx';




function Homepage() {
  return (
    <>

      <Banner />
      <AppartmentGrid />

    </>
  );
}

export default Homepage