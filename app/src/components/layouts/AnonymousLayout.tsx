import { Home } from "@mui/icons-material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/public/Header";
import Footer from "../pages/public/Footer";

const AnonymousLayout = () => {
    return (
      <div> 
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
   </div>
    )
  }
  
  export default AnonymousLayout;