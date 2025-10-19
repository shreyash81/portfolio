import React from 'react';
import './About.css';
import Resume from '../../assets/abhi/CV.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    };

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Shreyash Singh, a Computer Science Engineering student at Lovely Professional University (2022–2026).
                        </p>
                        <p className="about__description">
                            I am passionate about cloud computing, DevOps, and automation, with hands-on experience in Kubernetes, CI/CD pipelines, and multi-cloud deployments. I enjoy building scalable, production-ready applications and optimizing deployment processes for efficiency and reliability.
                        </p>
                        <p className="about__description">
                            I have worked with multi-language microservices, containerization, monitoring, and GitOps-driven CI/CD, and I continuously explore new tools and cloud technologies to improve system performance and deployment speed.
                        </p>

                        <h3 className="skills__title">Technical Skills</h3>
                        <ul className="about__list">
                            <li className="about__list-item">
                                <span className="about__list-icon">💻</span>
                                <span className="about__list-text">Languages: Java | C++ | Bash</span>
                            </li>
                            <li className="about__list-item">
                                <span className="about__list-icon">🛠</span>
                                <span className="about__list-text">DevOps & CI/CD: Docker | Kubernetes | Jenkins | GitHub Actions | GitLab CI | Argo CD</span>
                            </li>
                            <li className="about__list-item">
                                <span className="about__list-icon">☁️</span>
                                <span className="about__list-text">Cloud & Monitoring: AWS | Azure | IBM Cloud | Prometheus | Grafana | ELK/EFK</span>
                            </li>
                            <li className="about__list-item">
                                <span className="about__list-icon">⚙️</span>
                                <span className="about__list-text">Configuration & IaC: Ansible | Terraform | Helm | Git | Ubuntu | Linux</span>
                            </li>
                            <li className="about__list-item">
                                <span className="about__list-icon">🎓</span>
                                <span className="about__list-text">Concepts: OOPS | DBMS | OS | Networking | Automata</span>
                            </li>
                        </ul>

                        <button className="btn about__btn" onClick={downloadResume}>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
};

export default About;
