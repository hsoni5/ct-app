import React from "react";
import PersonPic from "../../../assets/images/person-1.jpg"
const Testimonials = () => {
    const testimonials = [
        { id: 1, name: "Fast &amp; Free Shipping", shortDesc: "", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link: "images/person-1.png" },
        { id: 2, name: "Easy to Shop", shortDesc: "", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link: "images/person-1.png" },
        { id: 3, name: "24/7 Support", shortDesc: "", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link: "images/person-1.png" },
        { id: 4, name: "Hassle Free Returns", shortDesc: "", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link: "images/person-1.png" },

    ]

    return (
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={PersonPic} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={PersonPic} className="d-block w-100 " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={PersonPic} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
			
    )

}
export default Testimonials;

