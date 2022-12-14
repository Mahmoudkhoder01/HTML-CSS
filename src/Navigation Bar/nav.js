import { Fragment } from "react";
import './nav.css';

const NavBar = props =>{
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

    return (
        <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <img className='logoimage' src={process.env.PUBLIC_URL + '/images/Lando.png'}></img>
            <button className="navbar-toggler" type="button" 
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" style={navItems}>
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item active" style={navItems}>
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
    </Fragment>
    )
}

export default NavBar;