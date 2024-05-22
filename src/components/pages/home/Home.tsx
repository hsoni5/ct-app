import React from "react";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { Help } from "@mui/icons-material";
import About from "./About";
import Chooseus from "./Chooseus";
import Contact from "./Contact";


const Home = () =>{
    return (
     <>
       {/*___________________Hero section*_______________________*/}
       
       <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Modern Interior <span className="d-block">Design Studio</span></h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" className="btn btn-secondary me-2">Shop Now</a>
                  <a href="#" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="images/couch.png" className="img-fluid"/>
							</div>
						</div>
					</div>
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

export default Home;
