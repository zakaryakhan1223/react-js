import React from "react";
import ContactUs from "../../component/contactus/ContactUs";
import Header from "../../component/header/Header";
import Experties from "../../component/ourexperties/Experties";
import Ourservices from "../../component/ourservices/Ourservices";
import Project from "../../component/projectGallery/Project";
import Question from "../../component/question/Question";
import Media from "../../component/socailmedia/Media";
import Testimonial from "../../component/testimonial/Testimonial";
import Trackrecord from "../../component/trackrecord/Trackrecord";
import "./style.css";

const Landing = () => {
  return (
    <div className="landin-scrren">
      <Header />
      <Trackrecord />
      <Ourservices />
      <Experties />
      <Project />
      <Testimonial />
      <Question />
      <Media />
      <ContactUs />
    </div>
  );
};
export default Landing;
