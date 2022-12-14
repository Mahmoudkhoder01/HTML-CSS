import { Fragment } from "react";
import './categories.css';



const Categories = props => {
    return (
        <Fragment>
            <div className="p-container">
                <h1 className="h1-container">Search by Category</h1>
                <div className="row" id="query" style={{ marginTop: "15rem", marginLeft: "4rem", flexWrap: "nowrap", width: "70%" }}>
                    <div className="col-lg-2  categories-card" data-aos="fade-left" data-aos-duration="3000">
                        <img className="categories-image" src={process.env.PUBLIC_URL + '/images/pmanager.png'}></img>
                        <p className="p-category">Project Managers</p>
                    </div>
                    <div className="col-lg-2 categories-card" data-aos="fade-left" data-aos-duration="3000">
                        <img className="categories-image" src={process.env.PUBLIC_URL + '/images/BEDEV4.png'}></img>
                        <p className="p-category">Back-End Developers</p>
                    </div>
                    <div className="col-lg-2 categories-card" data-aos="fade-left" data-aos-duration="3000">
                        <img className="categories-image" src={process.env.PUBLIC_URL + '/images/FEDEV.png'}></img>
                        <p className="p-category">Front-End dvelopers</p>
                    </div>
                    <div className="col-lg-2 categories-card" data-aos="fade-left" data-aos-duration="3000">
                        <img className="categories-image" src={process.env.PUBLIC_URL + '/images/UXUI.png'}></img>
                        <p className="p-category">Designer UI/UX</p>
                    </div>
                    <div className="col-lg-2 categories-card" data-aos="fade-left" data-aos-duration="3000">
                        <img className="categories-image" src={process.env.PUBLIC_URL + '/images/QA.png'}></img>
                        <p className="p-category">Quality Assurance</p>
                    </div>
                    <div className="col-lg-2 categories-card" data-aos="fade-left" data-aos-duration="3000">
                        <img className="categories-image" src={process.env.PUBLIC_URL + '/images/PM.png'}></img>
                        <p className="p-category">Product Managers</p>
                    </div>
                    <div className="col-lg-2 categories-card" data-aos="fade-left" data-aos-duration="3000">
                        <img className="categories-image" src={process.env.PUBLIC_URL + '/images/FEXPERT.png'}></img>
                        <p className="p-category">Finance Experts</p>
                    </div>
                </div>
            </div>
            <hr className="hr-dotted" style={{backgroundColor:"white"}}></hr>

        </Fragment>
    )
}

export default Categories;