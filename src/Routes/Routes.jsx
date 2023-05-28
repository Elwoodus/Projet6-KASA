import React from 'react';
import { createBrowserRouter , Outlet } from 'react-router-dom';
import App from '../App.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Main from '../components/Main.jsx';



const HeaderFooterLayout = () => {
  return ( <>
      <Navbar />
      <Main>
      <Outlet />
      </Main>
      <Footer />
      </>
  );
};

 const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: '/',
        element : <App />
      },
      {
        path: '/flat',
        
        element:   <h1>Appartements</h1>,
        
        
      },
      {
        path: '/about',
        element: (
          <h1>A propos</h1>
            )
      },
    ],
  },
]);

export default router;