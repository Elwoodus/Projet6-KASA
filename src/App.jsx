import React from 'react';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import AppartmentGrid from './components/AppartmentGrid.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import "./App.scss"


function App() {
  return (
    <div>
      <Navbar />
      <Main>
      <Banner />
      <AppartmentGrid />
      </Main>
      <Footer />
    </div>
  )
}

export default App