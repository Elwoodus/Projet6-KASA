import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Homepage from '../Pages/Homepage.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../Layout/Footer.jsx';
import Main from '../Layout/Main.jsx';
import ApartmentPage from '../Pages/ApartmentPage.jsx';
import About from '../Pages/About.jsx';
import ErrorPageNotFound from '../Pages/ErrorPageNotFound.jsx';



const HeaderFooterLayout = () => {
  return (<>
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
    errorElement: <ErrorPageNotFound/>,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/flat',

        element: <ApartmentPage/>
      },
      {
        path: '/about',
        element: <About />
      },
    ],
  },
]);

export default router;