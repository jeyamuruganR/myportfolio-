import React, { Component } from 'react'
import '../styles/herosectionstyle.css'
import heroImage from '../images/im1.png'

const HeroSection = () => {
  return (
    <section className='herosection'>
        <div className='herosection1-content'>   
            <div className="leftcontainer">
                <h1>Hi, I'm JeyaMurugan Rajendiran</h1>
                <h2>Developer</h2>
                <p>Crafting engaging and user-friendly web experiences with a passion for design and functionality.</p>
                <button className='btn hireme-btn'>Hire Me</button>
            </div>
            <div className="rightcontainer">
                <div className="image-container">
                    <img src={heroImage} alt="Hero Image"  />
                </div> 
            </div>
        </div>
    </section>

  )
}

export default HeroSection

