import { Fragment } from "react";
import './Features.css'
import { Grid, Checkbox } from "@mui/material";
// import {CircleUnchecked, CircleChecked} from '@mui/icons-material'


const Features = props => {

    const Checkboxli = () => {
        return (
            <Checkbox defaultChecked color="primary"
             sx={{ '& .MuiSvgIcon-root': { fontSize:35 } }}
            // icon={<CircleUnchecked />} checkedIcon={<CircleChecked />}
            />
        )
    }

    return (
        <Fragment>
            <div className="features">
                <h2>Compare Features</h2>
                <Grid container className="grid-features">
                    <Grid item lg={4} sm={12} md={6}>
                        <h2 className="h2-features">Basic</h2>
                        <hr></hr>
                        <ul>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                        </ul>
                    </Grid>
                    <Grid item lg={4} sm={12} md={6}>
                        <h2 className="h2-features">Pro</h2>
                        <hr></hr>
                        <ul>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                        </ul>
                    </Grid>
                    <Grid item lg={4} sm={12} md={6}>
                        <h2 className="h2-features">Business</h2>
                        <hr className="end-hr"></hr>
                        <ul>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                            <li><Checkboxli /> Feature name</li>
                        </ul>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Features;