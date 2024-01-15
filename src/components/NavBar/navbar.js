import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import AZ_logo from '../../pictures/AZ_Logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={AZ_logo} alt="Logo" className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <a className='desktopMenuListItem' href="https://drive.google.com/drive/folders/1gvxGvMb80dUoDP_dWcGp7NM5xH8J2HIB?usp=sharing" target="_blank">Resume</a>
            <a className='desktopMenuListItem' href="https://www.linkedin.com/in/alan-zhou-893481246/" target="_blank">LinkedIn</a>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Experience</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>Contact Me</button>  
    </nav>
  )
}

export default Navbar;
