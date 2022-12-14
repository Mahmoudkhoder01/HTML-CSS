import { Fragment } from "react";
import './review.css'

const Reviews = props => {
    return (
        <Fragment>
            <div className="row" data-aos="flip-left" data-aos-duration="1000" id="resp-apply" style={{ boxShadow: "5px 40px #e7e7e7", 
            width: "80%", height: "650px", backgroundColor: "white", marginTop: "15rem",
             marginLeft: "7rem", borderRadius: "20px", paddingTop: "50px", paddingLeft: "40px" }}>
                <div className="col-lg-6 col-md-12">
                    <img data-aos="fade-down" data-aos-duration="3000" className="review-image" src={process.env.PUBLIC_URL + 
                        '/images/review.png'}></img>
                    <h2 data-aos="fade-right" className="h2-review" data-aos-duration="3000">How to Apply for Nusoft?</h2>
                    <button className="review-button">Sign up now</button>
                </div>
                <div className="col-lg-6 col-md-12">
                    <h3>Step 1</h3>
                    <p className="p-steps">
                        FolloRegister and Define your CV
                    </p>
                    <hr></hr>
                    <h3>Step 2</h3>
                    <p className="p-steps">
                        Login with LinkedIN profile
                    </p>
                    <hr></hr>
                    <h3>Step 3</h3>
                    <p className="p-steps" style={{ width: "50%" }}>
                        Enter all your skils in the registered major
                    </p>
                </div>
            </div>

            <div className="review-div">
                <h1 className="review-title">Reviews</h1>
                <p className="p-review">People love what we do and we want to let you know</p>
               <div className="row" id="review-query">
                <div className="col-lg-4 review-cards">
                    <p className="p-cards">"Great job, very happy with the work. Was quick, creative and did
                        everything perfectly"</p>
                    <span>⭐⭐⭐⭐⭐</span>
                    <p>Aphiar Ivius</p>
                </div>
                <div className="col-lg-4 review-cards">
                    <p className="p-cards">"Very responsive and work completed very quickly. Thank you"</p>
                    <span>⭐⭐⭐⭐⭐</span>
                    <p>Aphiar Ivius</p>
                </div>
                <div className="col-lg-4 review-cards">
                    <p className="p-cards">"Very pleasant to work with Nusoft. Highly Recommend"</p>
                    ⭐⭐⭐⭐⭐
                    <p>Aphiar Ivius</p>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Reviews;