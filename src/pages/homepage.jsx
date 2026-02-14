import React, { useState, useEffect } from "react";
import Navbar from '../components/common/Navbar'
import Logo from '../components/common/Logo'
import AllProjects from "../components/projects/AllProject";
import Works from "../components/homepage/Works"
import Footer from "../components/common/Footer"
import INFO from "../data/user";
import {motion} from 'framer-motion'

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import './styles/homepage.css'
import Contact from "../components/common/Contact";

const homepage = () => {

    const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(100);
	const [oldLogoSize, setOldLogoSize] = useState(100);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 105 - (scroll * 3) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 55) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 1px 3px rgba(0, 0, 0, 0.25)" : "none",
	};

  return (
    <div className='page-content'>
        <Navbar/>
        <div className='content-wrapper'>
            <motion.div 
            initial={{opacity: 0, x: -200}}
            transition={{duration: 1}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            className="homepage-logo-container">
                <div style={logoStyle}>
                    <Logo width={logoSize} link={false} />
                </div>
            </motion.div>

            <div className="homepage-container">
                <motion.div 
                initial={{opacity: 0, y: -200}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className="homepage-first-area" id="About">
                    <div className="homepage-first-area-left-side">
                        <div className="title homepage-title">
                            {INFO.homepage.title}
                        </div>

                        <div className="subtitle homepage-subtitle">
                            {INFO.homepage.description.map((text, index) => (
                                <p key={index} className="mb-1">
                                {text}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="homepage-first-area-right-side">
                        <div className="homepage-image-container">
                            <div className="homepage-image-wrapper">
                                <img
                                    src="Gibran.png"
                                    alt="about"
                                    className="homepage-image"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                initial={{opacity: 0, x: -200}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                className="homepage-socials">
                    <a
                        href={INFO.socials.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="homepage-social-icon"
                        />
                    </a>
                    <a
                        href={INFO.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="homepage-social-icon"
                        />
                    </a>
                    <a
                        href={INFO.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="homepage-social-icon"
                        />
                    </a>
                </motion.div>

                <motion.div 
                initial={{opacity: 0, y: 200}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className="homepage-projects">
                    <AllProjects />
                </motion.div>

                <motion.div 
                initial={{opacity: 0, x: -200}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                className="homepage-after-title">
                    <div className="homepage-works">
                        <Works />
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, y: 100}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}>
                    <div>
                        <Contact/>
                    </div>
                </motion.div>

                <motion.div
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                className="page-footer">
                    <Footer />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default homepage