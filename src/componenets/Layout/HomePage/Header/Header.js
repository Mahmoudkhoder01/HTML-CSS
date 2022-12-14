import { Fragment } from "react";
import './Header.css';

const Header = props => {

    const stylebutton = {
        margin: "0px 0px 0px 20px",
        borderRadius: "10px",
    }
    const marlft = {
        borderRadius: "10px",
        backgroundColor: "#ededed",
        border: "0"
    }
    const navItems = {
        padding: "20px 30px",

    }

    return (<Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <img className='logoimage' src={process.env.PUBLIC_URL + '/images/logo.png'}></img>
                <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" style={navItems}>
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item" style={navItems}>
                            <a className="nav-link" href="/Freelancers" style={{ color: 'black' }}>Freelancers</a>
                        </li>
                        <li className="nav-item" style={navItems}>
                            <a className="nav-link" href="/About-US" style={{ color: 'black' }}>About</a>
                        </li>
                        <li className="nav-item" style={navItems}>
                            <a className="nav-link" href="/Contact" style={{ color: 'black' }}>Contact</a>
                        </li>
                    </ul>
                    <div className="container-fluid">
                        <form className="d-flex justify-content-end" id="nav-button">
                            <button className="btn btn-light resp-button"  style={marlft} type="button">Log in</button>
                            <button className="btn btn-primary resp-button" style={stylebutton} type="button">Get started</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
        <div className='row'>
            <div id="Header-container" data-aos="flip-up" data-aos-duration="3000" className="col-lg-6 col-md-12 col-sm-12">
                <p className="p1-header">
                    Our Freelancers are waiting for you.</p>
                <p className="p2-header">Find your best freelancer.</p>
                <div className="inputs">
                    <form>
                        <i className="fa-solid fa-magnifying-glass"></i><input className="input-container" type="text" placeholder="Job Title"></input>
                        <i className="fa-solid fa-location-dot"></i><input className="input-container" type="text" placeholder="Australia|Sydney"></input>
                        <button className="btn btn-dark" type="button" style={{ borderRadius: "20px", fontWeight: "bold" }}>Search</button>
                    </form>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <img className="header-photo" src={process.env.PUBLIC_URL + '/images/girlphone.png'}></img>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom"  className="follow-us">
            Follow US <i className="fa-brands fa-facebook-square social-media"></i>   <i className="fa-brands fa-linkedin social-media"></i> <i className="fa-brands fa-instagram-square social-media"></i>
        </div>
    </Fragment>
    )
};


export default Header;





