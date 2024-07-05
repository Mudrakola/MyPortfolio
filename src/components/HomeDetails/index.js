import React from "react";
import AOS from 'aos';
import { MdArrowCircleRight } from "react-icons/md";
import 'aos/dist/aos.css';
import "./index.css"

const HomeDetails=()=>(
    <div className="home-details-bg">
        <div className="home-details-inner-bg">
        <img src={require('../Images/Image.jpg')} alt="my-image" className="my-image" data-aos="fade-right" data-aos-duration="1500" />
        <div className="home-details-container">
            <h1 className="my-name" data-aos="fade-left" data-aos-duration="1500">- I'M DILEEP.</h1>
            <p className="designation-para" data-aos="fade-right" data-aos-duration="1500"><span className="designation span-design"><span className="span-design">Web Developer</span></span></p>
            <p className="description" data-aos="fade-up" data-aos-duration="1500">I’m developer and problem solver from India with high passion of creating softwares That looks and works great. I am passionate about the solving the real world problems ensuring all the possible testcases.</p>
            <button className="resume-btn" data-aos="fade-down" data-aos-duration="1500">Resume <MdArrowCircleRight className="arrow-circle-img" /></button>
        </div>
        </div>
    </div>
)
AOS.init();
export default HomeDetails