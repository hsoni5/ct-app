import { Router } from "react-router-dom";
import Routers from "../routes/Routers";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Testimonials from "../pages/home/Testimonials";


const Layout = () =>{

    return (
        <> 
        <Header/>
        <main>
          <Routers/>
        </main>
        <Footer/>
        </>
      )
}

export default Layout;