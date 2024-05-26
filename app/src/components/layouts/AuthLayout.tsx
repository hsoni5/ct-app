import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/public/Header";
import Footer from "../pages/public/Footer";

const AuthLayout = () => {
    return (
      <div>
        <Header />
          <Outlet />
       <Footer />
      </div>
    )
  }
  
  export default AuthLayout;