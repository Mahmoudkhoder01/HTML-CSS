import { Fragment } from "react";
import './testimonials.css';


const Testimonials = props => {
    return (
        <Fragment>

            <div className="row" id="resp-div1" data-aos="fade-right"
     data-aos-offset="300" data-aos-duration="1500"
     data-aos-easing="ease-in-sine" style={{ paddingTop: "70px", paddingLeft: "8rem" }}>
                <div className="col-lg-6">
                    <img src={process.env.PUBLIC_URL + '/images/testimonials1.png'}></img>
                </div>
                <div className="col-lg-6">
                    <h3 style={{ width: "70%" }}>Talk to One of Our Industry Experts</h3>
                    <p className="p-testimonials">A expert from our team will consult with clients to determine
                        their requierments,technical specifications, and team dynamics.
                    </p>
                    <button className="testimonials-button">Learn More</button>
                </div>
            </div>
            <div className="row" id="resp-div2" data-aos="fade-left" data-aos-duration="1500" style={{ paddingTop: "80px", paddingLeft: "8rem" }}>
                <div className="col-lg-6">
                    <h3 style={{ width: "65%" }}>Work With Expert-Selected Talent</h3>
                    <p className="p-testimonials">
                        We'll associate you with the right talent for your project in a matter of days
                    </p>
                    <button className="testimonials-button">Learn More</button>
                </div>
                <div className="col-lg-6">
                    <img className="resp-img" src={process.env.PUBLIC_URL + '/images/testimonials2.png'}></img>
                </div>
            </div>
            <div className="row" id="resp-div3" data-aos="fade-up-right" data-aos-duration="1500"  style={{ paddingTop: "80px", paddingLeft: "8rem" }}>
                <div className="col-lg-6">
                    <img src={process.env.PUBLIC_URL + '/images/testimonials3.png'}></img>
                </div>
                <div className="col-lg-6">
                    <h3 style={{ width: "70%" }}>The Right Fit, Guaranteed</h3>
                    <p className="p-testimonials" style={{ width: "45%" }}>
                        Working with your new team member on a permenant basis will ensure you find
                        the best candiate
                    </p>
                    <button className="testimonials-button">Learn More</button>
                </div>
            </div>
        </Fragment>
    )
}


export default Testimonials;