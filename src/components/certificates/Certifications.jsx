import React from "react";
import "./Certifications.css";
import { RiExternalLinkLine } from "react-icons/ri";
import { motion } from "framer-motion";

const certifications = [
    {
      "title": "Prompt Engineering for ChatGPT",
      "platform": "Stanford University",
      "skills": ["Prompt Engineering", "ChatGPT", "AI Applications", "NLP"],
      "date": "July 2024",
      "link": "https://www.coursera.org/account/accomplishments/certificate/I78KRTAKV7M3"
    },
    {
      "title": "Introduction to IBM Cloud",
      "platform": "IBM",
      "skills": ["Cloud Computing", "IBM Cloud Services", "Cloud Architecture", "Cloud Security"],
      "date": "May 2025",
      "link": "#"
    }
  ];
const Certifications = () => {
    return (
        <section className="certifications container section" id="certifications">
            <h2 className="section__title">Certifications</h2>

            <div className="certifications__container grid">
                {certifications.map((cert, index) => (
                    <motion.div
                        layout
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="certification__card"
                        key={index}
                    >
                        <div className="certification__content">
                            <h3 className="certification__title">{cert.title}</h3>
                            <div className="certification__platform">
                                <span className="platform__name">{cert.platform}</span>
                                <span className="certification__date">{cert.date}</span>
                            </div>
                            <div className="certification__skills">
                                {cert.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill__tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="certification__link"
                        >
                            <RiExternalLinkLine />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;