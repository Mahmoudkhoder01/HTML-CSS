import { Fragment } from "react";
import './Contact.css';
import { Grid, Button } from "@mui/material";

const Contact = props =>{
    return (
        <Fragment>
            <Grid container className="grid-contact">
                <Grid item lg={6} md={6}>
                <img className="image-contact" src={process.env.PUBLIC_URL + '/images/contact.png'}></img>
                </Grid>
                <Grid item lg={6} md={6} className="grid2">
                    <h1 className="hp-contact">Contact us</h1>
                    <p className="hp-contact p-contact">Explore the future with us. Feel free to get in touch.</p>
                    <form>
                        <label>Name</label>
                            <p><input className="input-contact" type="text" placeholder="Full Name"></input></p>
                        <label>Email</label>
                        <p><input className="input-contact" type="email" placeholder="Email address"></input></p>
                        <label>Message</label>
                        <p><input className="input-contact" type="text" placeholder="How can we help you?"></input></p>
                    </form>
                    <Button variant="contained" color="primary" className="button-contact">Send message</Button>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Contact;