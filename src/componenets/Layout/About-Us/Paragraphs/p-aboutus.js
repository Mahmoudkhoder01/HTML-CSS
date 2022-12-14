import { Fragment } from "react";
import './p-aboutus.css';
import { Grid } from "@mui/material";

const Paboutus = props => {
    return (
        <Fragment>
            <div className="parag">
                <h1>About us</h1>
                <p className="p-top">
                    Anchors Ventures Holding (AVH) is a multinational private equity firm based in Sydney, Australia. Its focus is on developing
                    technological and industrial solutions for different businesses and companies around the world, creating a smooth
                    transition to digitalization. It offers services that help companies stay on the right track regarding their technological
                    advancement and integration, business related decision making, and market specific strategies for any presented sector.
                    Its goal is to help businesses emerge as market leaders in their respective fields.
                </p>
                <h1>About Nusoft</h1>
                <p className="p-top">
                    Nusoft is an exclusive network of the top freelance software developers that highly meet the marketplace expectations in
                    the level of experience they had and liaise between Nusoft freelancers and the client to confirm the engagement and their
                    satisfaction. knowing that freelancers are responsible for helping in consultation about specific programming technologies,
                    creation of software specifications and documentation, creating of programming code, fixing the technical error, creating
                    website and processing data.
                </p>
            </div>
            <Grid container className="grid-container">
                <Grid item lg={6} md={6}>
                    <h1>Our mission</h1>
                    <p className="parag2">WE help companoes and talented self-employed people from secure relationships.  </p>
                </Grid>
                <Grid item lg={6} md={6}>
                    <h1>Our Vision</h1>
                    <p className="parag2">We structure a high-level framework architecture.
                        That open a great investment capacities and
                        provide a wide network that satisfy all clients
                        needs that will make it possible to develop
                        sustainable marketable expertise platform.</p>
                </Grid>
            </Grid>
            <hr className="hr-about"></hr>
        </Fragment>
    )
}

export default Paboutus;