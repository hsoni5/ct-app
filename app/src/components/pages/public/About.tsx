import React from "react";
import Bed from "../../../assets/images/bed.avif"

const About = () => {
    return(
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>About Us</h1>
                            <p className="mb-4">
                            For in the heart of every hospital beats the pulse of humanity—a symphony of resilience, empathy, and healing that reminds us of the profound beauty of the human spirit in its quest for wellness and wholeness.</p>
                            <p>
                             <a href="#" className="btn btn-white-outline bg-primary">Explore</a>
                           </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src={Bed} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About;