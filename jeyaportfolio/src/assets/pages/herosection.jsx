import React from 'react'
import '../styles/herosectionstyle.css'
import heroImage from '../images/im1.png'
import { motion } from "framer-motion";


// Font Awesome
// import '@fortawesome/fontawesome-free/css/all.min.css'

const HeroSection = () => {
  return (
    <section className="herosection">
      <div className="herosection1-content">

        {/* LEFT */}
        <div className="leftcontainer">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >Hi, I'm JeyaMurugan Rajendiran</motion.h1>
          <h2>Developer</h2>
          <p>
            Crafting engaging and user-friendly web experiences with a passion
            for design and functionality.
          </p>
          <button className="btn hireme-btn">Hire Me</button>
        </div>

        {/* RIGHT */}
        <div className="rightcontainer">
          <div className="image-container circle-mode">

            {/* PROFILE IMAGE */}
            <img src={heroImage} alt="Hero" />



          </div>



        </div>


        {/* ICON ORBIT */}
        <div className="icon-orbitcontainer" >
          <div className="icon-orbit" >
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-node-js"></i>
            <i className="fab fa-python"></i>
            <i className="fab fa-java"></i>
            <i className="fab fa-wordpress"></i>
            {/* duplicate for seamless loop */}
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-node-js"></i>
            <i className="fab fa-python"></i>
            <i className="fab fa-java"></i>
            <i className="fab fa-wordpress"></i>

            {/* duplicate for seamless loop */}
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-node-js"></i>
            <i className="fab fa-python"></i>
            <i className="fab fa-java"></i>
            <i className="fab fa-wordpress"></i>
          </div>

        </div>
        

      </div>
    </section>
  )
}

export default HeroSection
