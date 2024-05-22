
import React from "react"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import { Route, Routes } from "react-router-dom";
import Doctors from "../pages/Doctors/Doctors"
import Home from "../pages/home/Home";
import Contact from "../pages/home/Contact";
import Services from "../pages/home/Services";
import Testimonials from "../pages/home/Testimonials";
import About from "../pages/home/About";
import { Help } from "@mui/icons-material";

const Routers = () =>{
    return (
        <>
        <Routes>
         <Route  path="/" element={<Home/>}/>
         <Route  path="/home" element={<Home/>}/>
         <Route  path="/services" element={<Services/>}/>
         <Route  path="/testimonials" element={<Testimonials/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route  path="/help" element={<Help/>}/>
         <Route  path="/login" element={<Login/>}/>
         <Route  path="/register" element={<Signup/>}/>
         <Route  path="/doctors" element={<Doctors/>}/>
         <Route  path="/doctors/:id" element={<Services/>}/>
        </Routes>
        </>
    )
}

export default Routers;
