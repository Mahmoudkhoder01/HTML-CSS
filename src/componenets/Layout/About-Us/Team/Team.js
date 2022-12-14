import { Fragment } from "react";
import './Team.css';
import { Grid } from "@mui/material";

const Team = props => {
    return (
        <Fragment>
            <div style={{ marginTop: "2rem" }}>
                <h1 className="h1-about">Looking for a Job</h1>
                <img className='img-aboutus' src={process.env.PUBLIC_URL + '/images/Aboutus.png'}></img>
            </div>
            <div>
                <h1 className="h1-team">Team</h1>
            </div>
            <p style={{ textAlign: "center" }}>Meet the people behind our platform</p>
            <Grid container style={{ textAlign: "center" }}>
                <Grid item lg={3} md={6} sm={6} style={{ margin: "auto" }}>
                    <img src={process.env.PUBLIC_URL + '/images/name.png'}></img>
                    <h5>Name Name</h5>
                    Chief Wizard Officer
                </Grid>
                <Grid item lg={3} md={6} sm={6} style={{ margin: "auto" }}>
                    <img src={process.env.PUBLIC_URL + '/images/name.png'}></img>
                    <h5>Name Name</h5>
                    Chief Wizard Officer
                </Grid>
                <Grid item lg={3} md={6} sm={6} style={{ margin: "auto" }}>
                    <img src={process.env.PUBLIC_URL + '/images/name.png'}></img>
                    <h5>Name Name</h5>
                    Chief Wizard Officer
                </Grid><Grid item lg={3} md={6} sm={6} style={{ margin: "auto" }}>
                    <img src={process.env.PUBLIC_URL + '/images/name.png'}></img>
                    <h5>Name Name</h5>
                    Chief Wizard Officer
                </Grid>
                <Grid item lg={3} md={6} sm={6} style={{ margin: "auto" }}>
                    <img src={process.env.PUBLIC_URL + '/images/name.png'}></img>
                    <h5>Name Name</h5>
                    Chief Wizard Officer
                </Grid>
                <Grid item lg={3} md={6} sm={6} style={{ margin: "auto" }}>
                    <img src={process.env.PUBLIC_URL + '/images/name.png'}></img>
                    <h5>Name Name</h5>
                    Chief Wizard Officer
                </Grid>
                <Grid item lg={3} md={6} sm={6} style={{ margin: "auto" }}>
                    <img src={process.env.PUBLIC_URL + '/images/name.png'}></img>
                    <h5>Name Name</h5>
                    Chief Wizard Officer
                </Grid>
                <Grid item lg={3} md={6} sm={6} style={{ margin: "auto" }}>
                    <img src={process.env.PUBLIC_URL + '/images/name.png'}></img>
                    <h5>Name Name</h5>
                    Chief Wizard Officer
                </Grid>
            </Grid>
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
        </Fragment>
    )
}

export default Team;