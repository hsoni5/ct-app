
import React from "react"
import servicePic from "../../../assets/images/doctor-img01.png"

const Services = () => {
  const services = [
    { id: 1, name: "Dr. Abineya AR", specilization:"Gynecologist-obstetrician", 
    shortDesc: "MBBS, MD - Obstetrics & Gynaecology Infertility Specialist,Gynecologist,Obstetrician", 
    description: "Gynecologist and Obstetrician in Mettupalayam, Coimbatore and has an experience of 10 years in these fields.", 
    img: "" },
    { id: 1, name: "Dr. Abineya AR", specilization:"Gynecologist-obstetrician", 
    shortDesc: "MBBS, MD - Obstetrics & Gynaecology Infertility Specialist,Gynecologist,Obstetrician", 
    description: "Gynecologist and Obstetrician in Mettupalayam, Coimbatore and has an experience of 10 years in these fields.", 
    img: "" },
  ]
  return (
    <>
      <div className="row mb-2">
        { services.map((item, index) =>
        <div className="col-md-6" key={index}>
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">{item.name}</strong>
              <h3 className="mb-0">{item.specilization}</h3>
              <div className="mb-1 text-body-secondary">{item.shortDesc}
                </div>
              <p className="card-text mb-auto">
                {item.description}
               </p>
              <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg className="bi">
                  <use href="#chevron-right" />
                  </svg>
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg className="bd-placeholder-img" width="200" height="260" xmlns="http://www.w3.org/2000/svg" 
                 role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
              </svg>
            </div>
          </div>
        </div>
     )}
    </div>
    </>
  )

}

export default Services;