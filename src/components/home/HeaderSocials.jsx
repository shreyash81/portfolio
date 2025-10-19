import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev, FaVoicemail, FaMailBulk } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/shreyash81' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>


            <a href='https://www.linkedin.com/in/shreyash357' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>


        </div>
    );
};

export default HeaderSocials;
