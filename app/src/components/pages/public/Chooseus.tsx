import React from "react";
import hospital from "../../../assets/images/hospital.jpg"
import facilities from "../../../assets/images/facilities.png"
import drs from "../../../assets/images/drs.png"
import two from "../../../assets/images/two.png"
import patient from "../../../assets/images/patientcenter.png"


const Chooseus = () => {
  const choosesList = [
    {id :1, name: "Comprehensive Services", shortDesc:"", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link:`${facilities}`},
    {id :2, name: "Expertise You Can Trust", shortDesc:"", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link:`${drs}`},
    {id :3, name: "24/7 Support", shortDesc:"", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link:`${two}`},
    {id :4, name: "Patient-Centered Approach", shortDesc:"", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.", link:`${patient}`},

  ]

    return (
        <>
            <div>
                <div className="why-choose-section">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6">
                                <h2 className="section-title">Why Choose Us</h2>
                                <p>
                                Expertise You Can Trust: Our team consists of highly skilled healthcare professionals, including board-certified physicians, specialists, and nurses, who are dedicated to delivering exceptional care. With years of experience and a commitment to staying at the forefront of medical advancements, you can trust that you're in good hands with us.
                                </p>
                               
                                <div className="row my-5" >
                                {
                                 choosesList.map((item, index) =>
                                    <div className="col-6 col-md-6">
                                       <h3>{item.name}</h3>

                                        <div className="feature" key={index}>
                                            <div className="icon">
                                                <img src={item.link} alt="Image" width="100px" height="100px" className="imf-fluid" />
                                            </div>
                                            <p>{item.description}</p>
                                          </div>
                                   </div>
                                       )
                                    }
                                </div>
                           
                            </div>
                            <div className="col-lg-5">
                                <div className="img-wrap">
                                    <img src={hospital} alt="Image" className="img-fluid" />
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