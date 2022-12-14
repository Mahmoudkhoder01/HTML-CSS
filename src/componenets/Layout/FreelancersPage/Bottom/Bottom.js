import { Fragment } from "react";
import './Bottom.css';
import FooterBar from "../../../FooterBar/FooterBar";
import { textAlign } from "@mui/system";

const Footer = props => {
    return (
        <Fragment>
            <div className="asked-questions">
                <h1 className="h1-bottom">
                    Frequently asked questions
                </h1>
                <select className="select-questions">
                    <option>Question 1</option>
                </select>
                <hr className="hr-bottom"></hr>
                <select className="select-questions">
                    <option></option>
                </select>
                <hr className="hr-bottom"></hr>
                <select className="select-questions">
                    <option>Question 3</option>
                </select>
                <hr className="hr-bottom"></hr>
                <select className="select-questions">
                    <option>Question 4</option>
                </select>
                <hr className="hr-bottom"></hr>
                <select className="select-questions">
                    <option>Question 5</option>
                </select>
                <hr className="hr-bottom"></hr>
                <select className="select-questions">
                    <option>Question 6</option>
                </select>
                <hr className="hr-bottom"></hr>
                <div className="row" id="resp-footer-box" style={{
                    height: "350px",
                    backgroundColor: "white", width: "80%", marginTop: "15rem",
                    marginLeft: "10rem", borderRadius: "20px", paddingTop: "50px",
                    paddingLeft: "40px"
                }}>
                    <div className="col-lg-6 col-md-12  footer-navp-footer">
                        <h1 className="h1-footer">Get started with Lando today</h1>
                        <p style={{ width: "60%", margin: "auto" }}>Here you can explain why people should definitely use our platform</p>
                        <button className="footer-button">Sign up now</button>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img className="resp-footer-image" src={process.env.PUBLIC_URL + '/images/footer.png'}></img>
                    </div>
                </div>
            </div>
            <FooterBar/>
        </Fragment>
    )
}

export default Footer;