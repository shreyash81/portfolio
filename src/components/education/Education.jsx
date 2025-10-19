import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
    {
        "degree": "B.Tech in Computer Science & Engineering",
        "institution": "Lovely Professional University",
        "duration": "2022 – 2026",
        "grade": "Pursuing",
        "Stream": "Cloud Computing & Ethical Hacking",
    },
    {
        "degree": "12th Grade (Science)",
        "institution": "Vidhya Valley Sr. Sec. School",
        "duration": "2020 – 2021",
        "grade": "80%",
        "stream": "Science (Physics, Chemistry, Mathematics)"
    },
    {
        "degree": "10th Grade",
        "institution": "Sardar Patel Sr. Sec. School",
        "duration": "2018 – 2019",
        "grade": "56%",
        "stream": "General Studies"
    }
];

const Education = () => {
    return (
        <section className="resume container section" id="education">
            <h2 className="section__title">Education</h2>
            
            <div className="resume__container">
                <div className="timeline grid">
                    {education.map((val, id) => (
                        <div className="timeline__item" key={id}>
                            <FaGraduationCap className="timeline__icon" />
                            <span className="timeline__date">{val.duration}</span>
                            <h3 className="timeline__title">{val.degree}</h3>
                            <p className="timeline__text">
                                <strong>{val.institution}</strong><br />
                                Grade: {val.grade}<br />
                                Stream: {val.stream || val.Stream}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;