
import React from "react"

const Contact = () => {

    return (
        <div className="container relative">
            <div className="row">
                <div className="col-lg-8">
                    <div className="subscription-form">
                        <h3 className="d-flex align-items-center">
                        <span>Subscribe to Newsletter</span></h3>
                        <form action="#" className="row g-3">
                            <div className="col-auto">
                                <input type="text" className="form-control" placeholder="Enter your name" />
                            </div>
                            <div className="col-auto">
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-primary">
                                    <span className="fa fa-paper-plane">Subscribe</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;