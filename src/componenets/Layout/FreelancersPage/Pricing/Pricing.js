import { Fragment } from "react";
import NavBar from "../../../../Navigation Bar/nav";
import './Pricing.css';
import { Paper, Grid, Button } from "@mui/material";

const Freelancers = props => {


    return (
        <Fragment>
            <NavBar />
            <div className="pricing">
                <h1>Pricing</h1>
                <p className="p-pricing">Our pricing is not expensive, but it's not cheap either.
                    it's exactly what it should be</p>
                <Grid container spacing={0} className="grid-container">
                    <Grid item>
                        <Paper className="paper-components paper-z">
                            <h5>Basic</h5>
                            <span className="dol-pricing">$</span><span className="nb-pricing">
                                <sub>9</sub></span><sub>/month</sub>
                            <p className="p-cards">
                                For individuals and small teams
                            </p>
                            <Button
                                className="button-cards"
                                variant="contained"
                                color="primary"
                            >
                                Get Started with Basic</Button>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="paper-components paper-display">
                            <Button
                                className="b-c-end"
                                variant="conatined"
                                color="primary"
                            >
                                Most popular</Button>
                            <h5>Pro</h5>
                            <span className="dol-pricing">$</span><span className="nb-pricing">
                                <sub>19</sub></span><sub>/month</sub>
                            <p className="p-cards">
                                For startups and growing businesses
                            </p>
                            <Button
                                className="button-cards b-c-md"
                                variant="contained"
                                color="primary"
                            >
                                Get Started with Basic</Button>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="paper-components paper-z">
                            <h5>Business</h5>
                            <span className="dol-pricing">$</span><span className="nb-pricing">
                                <sub>99</sub></span><sub>/month</sub>
                            <p className="p-cards">
                                For organizations with advanced needs
                            </p>
                            <Button className="button-cards" variant="contained" color="primary">Get Started with Basic</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Freelancers;