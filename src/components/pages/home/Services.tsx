
import React from "react"
import servicePic from "../../../assets/images/doctor-img01.png"

const Services = () => {
    const services = [
        { id: 1, name: "Fast &amp; Free Shipping", shortDesc: "", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link: ""},
        { id: 2, name: "Easy to Shop", shortDesc: "", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link: "" },
        { id: 3, name: "24/7 Support", shortDesc: "", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link: "" },
        { id: 4, name: "Hassle Free Returns", shortDesc: "", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link: "" },

    ]
    return (
        <>
            <div className="product-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                            <p><a href="shop.html" className="btn">Explore</a></p>
                        </div>
                        {
                            services.map((item, index) =>
                                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={index}>
                                    <a className="product-item" href="cart.html">
                                        <img src={servicePic} className="img-fluid product-thumbnail" />
                                        <h3 className="product-title">{item.name}</h3>
                                        <strong className="product-price">$50.00</strong>
                                        <span className="icon-cross">
                                            <img src="" className="img-fluid" />
                                        </span>
                                    </a>
                                </div>
                            )}
                    </div>
                    </div>
            </div>
        </>
    )

}

export default Services;