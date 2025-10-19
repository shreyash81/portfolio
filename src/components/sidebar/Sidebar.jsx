import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import LightLogo from "../../assets/light-logo.svg";

import { FaGraduationCap, FaCertificate, FaCode, FaUser, FaHome, FaEnvelope, FaMoon, FaSun, FaBars} from "react-icons/fa";


const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo">
                    <img src={props.theme === 'light' ? LightLogo : Logo} alt="logo" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <FaHome />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <FaUser />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#projects" className="nav__link">
                                    <FaCode />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#education" className="nav__link">
                                    <FaGraduationCap />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#certifications" className="nav__link">
                                    <FaCertificate />
                                </a>
                            </li>



                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <FaEnvelope />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button onClick={() => { props.switchTheme(); showMenu(!toggle) }} className="nav__link footer__button">
                        {props.theme === 'light' ? <FaMoon /> : <FaSun />}
                    </button>
                </div>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <FaBars/>
            </div>
        </>
    );
};

export default Sidebar;
