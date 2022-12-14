import { Fragment } from "react";
import './footer.css'

const Footer = props => {

    const afooter = {
        color: "black",
        fontFamily: "sans-serif",
        fontSize: "15px"
    }

    return (
        <Fragment>
            <div className="row" id="resp-footer-box" style={{ height: "400px", backgroundColor: "white", width: "80%", marginTop: "15rem", marginLeft: "10rem", borderRadius: "20px", paddingTop: "50px", paddingLeft: "40px" }}>
                <div className="col-lg-6 col-md-12  footer-navp-footer">
                    <h1 className="h1-footer">Get started with Nusoft</h1>
                    <p style={{ width: "60%" }}>Here you can explain why people should definitely use our platform</p>
                    <button className="footer-button">Sign up now</button>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img className="resp-footer-image" src={process.env.PUBLIC_URL + '/images/footer.png'}></img>
                </div>
            </div>
            <hr className="hr-footer"></hr>
            <div className="row" id="resp-footer-nav" style={{ marginLeft: "10rem" }}>
                <div className="col-lg-3 col-md-3" style={{ width: "17%", marginRight: "50px" }}>
                    <img className="footer-image" src={process.env.PUBLIC_URL + '/images/logo.png'}></img>
                    <p style={{ paddingTop: "10px", marginBottom: "0px" }}>
                        2021 © Nusoft</p>
                    All right resrved.
                </div>
                <div className="col-lg-3 col-md-3  footer-nav" style={{ width: "17%" }}>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" style={afooter} href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={afooter} href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={afooter} href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={afooter} href="#" >Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 footer-nav" style={{ width: "17%" }}>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" style={afooter} href="#">Facebook</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={afooter} href="#">Instagram</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={afooter} href="#">Twitter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={afooter} href="#" >LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 footer-nav" style={{ width: "17%" }}>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" style={afooter} href="#">Privacy Policy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={afooter} href="#">Terms Of Service </a>
                        </li>
                    </ul>
                </div>
            </div>

        </Fragment>
    )
}

export default Footer;