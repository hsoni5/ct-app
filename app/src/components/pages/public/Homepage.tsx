import React from "react";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { Help } from "@mui/icons-material";
import About from "./About";
import Chooseus from "./Chooseus";
import Contact from "./Contact";


const Homepage = () =>{
    return (
     <>
       {/*___________________Hero section*_______________________*/}
       
 <div className="home p-4 p-md-5 mb-1 rounded text-body-emphasis bg-body-secondary">
    <div className="col-lg-6 px-0">
      <h1 className="display-4 fst-italic">Consult top doctors online for any health concern
    </h1>
      <p className="lead my-3">Private online consultations with verified doctors in all specialists.Book an appointment for an in-clinic consultation</p>
      <p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">Book now...</a></p>
    </div>
  </div>

        <Services/>
        <Chooseus/>
        <Testimonials/>
        <Help/>
        <About/>
        <Contact/>
     </>
    )
}

export default Homepage;
