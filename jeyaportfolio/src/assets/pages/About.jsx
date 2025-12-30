import React from 'react';
import jeya from '../images/jeya.png';
import CircularText from '../com/CircularText';
import "../styles/Aboutstyle.css";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="aboutsection">
            <div className="aboutcontainer">

                {/* IMAGE + CIRCULAR TEXT */}
                <motion.div
                    className="aboutmeimage"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img src={jeya} alt="About Me" />

                    <CircularText
                        text="jeya*murugan*Rajendiran*Developer*"
                        onHover="speedUp"
                        spinDuration={20}
                        className="custom-class"
                    />
                </motion.div>

                {/* TEXT CONTENT */}
                <motion.div
                    className="aboutmetext"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Hello! I'm Jeya, a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through code.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or indulging in my love for photography.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Feel free to explore my portfolio and get in touch if you'd like to collaborate or learn more about my work!
                    </motion.p>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
