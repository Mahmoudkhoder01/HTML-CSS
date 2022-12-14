import { Fragment } from "react";
import './FooterBar.css'

const FooterBar = props => {
    const afooter = {
        color: "black",
        fontFamily: "sans-serif",
        fontSize: "15px"
    }
    return (
        <Fragment>
            <hr className="hr-footer"></hr>
            <div className="row" id="resp-footer-nav">
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

export default FooterBar;