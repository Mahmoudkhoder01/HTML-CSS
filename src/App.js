import React, { Fragment } from 'react';
import './App.css';
import Header from './componenets/Layout/HomePage/Header/Header';
import Categories from './componenets/Layout/HomePage/Categories/categories';
import Testimonials from './componenets/Layout/HomePage/Testimonials/testimonials';
import Reviews from './componenets/Layout/HomePage/Reviews/review';
import Footer from './componenets/Layout/HomePage/Footer/footer';
import Pricing from './componenets/Layout/FreelancersPage/Pricing/Pricing';
import Features from './componenets/Layout/FreelancersPage/Features/Features';
import Bottom from './componenets/Layout/FreelancersPage/Bottom/Bottom';
import NavBar from './Navigation Bar/nav';
import Paboutus from './componenets/Layout/About-Us/Paragraphs/p-aboutus';
import Team from './componenets/Layout/About-Us/Team/Team';
import Contact from './componenets/Layout/Contact/Contact';
import { Route } from "react-router-dom";
import FooterBar from './componenets/FooterBar/FooterBar';


function App() {
  return (
    <Fragment>
      <Route exact path="/">
        <Header />
        <Categories />
        <Testimonials />
        <Reviews />
        <Footer />
      </Route>
      <Route exact path="/Freelancers">
        <Pricing />
        <Features />
        <Bottom />
      </Route>
      <Route exact path="/About-US">
        <NavBar />
        <Paboutus />
        <Team />
        <FooterBar />
      </Route>
      <Route path="/Contact">
        <NavBar />
        <Contact />
        <FooterBar />
      </Route>
    </Fragment>
  );
}

export default App;
