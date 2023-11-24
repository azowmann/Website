import React from 'react';
import './projects.css';
import CalculatorLogo from '../../pictures/calculator-2017-10-10.png';

const Projects = () => {
  return (
    <section id='projects'>
        <span className="projectTitle">My Projects</span>
        <span className="projectDesc">Below are some of my projects!</span>
        <div className='projectBars'>
            <div className='projectBar'>
                <img src={CalculatorLogo} alt="Calculator" className='projectBarImg' />
                <div className='projectBarText'>
                    <h2>Calculator</h2>
                    <p>This is demo text, write smth here abt it</p>
                </div>
            </div>
            <div className='projectBar'>
                <img src="" alt="" className='projectBarImg' />
                <div className='projectBarText'>
                    <h2></h2>
                    <p></p>
                </div>
            </div>
            <div className='projectBar'>
                <img src="" alt="" className='projectBarImg' />
                <div className='projectBarText'>
                    <h2></h2>
                    <p></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects;