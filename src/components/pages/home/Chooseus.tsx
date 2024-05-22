import React from "react";
import whyChoose from "../../../assets/images/why-choose-us-img.jpg"

const Chooseus = () => {
  const choosesList = [
    {id :1, name: "Fast &amp; Free Shipping", shortDesc:"", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link:"https://www.istockphoto.com/photo/the-bandra-worli-sea-link-gm1095885438-294208504?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Flink%2F&utm_term=link"},
    {id :2, name: "Easy to Shop", shortDesc:"", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link:"https://www.istockphoto.com/photo/cable-stayed-bridge-gm1482648051-509530761"},
    {id :3, name: "24/7 Support", shortDesc:"", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link:"https://www.istockphoto.com/photo/cable-stayed-bridge-gm1482648051-509530761"},
    {id :4, name: "Hassle Free Returns", shortDesc:"", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link:"https://www.istockphoto.com/photo/cable-stayed-bridge-gm1482648051-509530761"},

  ]

    return (
        <>
            <div>
                <div className="why-choose-section">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6">
                                <h2 className="section-title">Why Choose Us</h2>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                               
                                <div className="row my-5" >
                                {
                                 choosesList.map((item, index) =>
                                    <div className="col-6 col-md-6">
                                        <div className="feature" key={index}>
                                            <div className="icon">
                                                <img src={item.link} alt="Image" className="imf-fluid" />
                                            </div>
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                          </div>
                                   </div>
                                       )
                                    }
                                </div>
                           
                            </div>
                            <div className="col-lg-5">
                                <div className="img-wrap">
                                    <img src={whyChoose} alt="Image" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chooseus;