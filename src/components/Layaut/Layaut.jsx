import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AdminNav from './../../admin/AdminNav';

const Layaut = () => {

  const location = useLocation()

  return(
    <>
      {
        location.pathname.startsWith('/dashboard') ? <AdminNav/> : <Header/>
      }
      <Outlet/>
      <Footer/>
    </>
  ) 
  
  
}

export default Layaut