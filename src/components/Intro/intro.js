import React from 'react';
import ReactDOM from 'react-dom';
import './intro.css';
import bg from '../../pictures/AlanPortrait.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className="hello">Hi, I'm Alan,</span>
            <p className='introPara'>a second year Computer Science student at McMaster University. I'm passionate about positivity and problem solving. I am 
            currently building my career in Software Engineering with hopes of eventually working in Artifical Intelligence Research in the future. Feel free
            to reach out to me on LinkedIn or by email, and even check out my social media if you'd like! Thanks for stopping by.</p>
            <div className='social-media-icons'>
              <a className='social-icon' href="https://www.instagram.com/alan.zhou_34/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className='social-icon' href="https://www.tiktok.com/@alan72713?_t=8iMNdOOwRF8&_r=1" target="_blank">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a className='social-icon' href="https://github.com/azowmann" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className='social-icon' href="https://www.linkedin.com/in/alan-zhou-893481246/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
        </div>
        <img src={bg} alt="Profile" className='bg' />

    </section>
  )
}

export default Intro;