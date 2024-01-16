import React from 'react';
import './projects.css';
import CalculatorLogo from '../../pictures/calculator-2017-10-10.png';
import WebsiteLogo from '../../pictures/free-global-2031088-1714467.webp';
import ExtensionLogo from '../../pictures/61015.png';

const Projects = () => {
  return (
    <section id='projects'>
        <span className="projectTitle">My Projects</span>
        <span className="projectDesc">Below are some of my personal projects!</span>
        <div className='projectBars'>
            <div className='projectBar'>
                <img src={CalculatorLogo} alt="Calculator" className='projectBarImg' />
                <div className='projectBarText'>
                <a className='ProjectCalculatorSC' href="https://github.com/azowmann/Calculator" target="_blank">Calculator</a>
                    <ul class='mathatdesc'>
                      <li>Mimicked the standard locked screen version of iPhone’s calculator app. Created an environment similar to the iPhone app, allowing for familiarity among most iOS users.</li>
                      <li>Logic developed solely for basic operations including addition, subtraction, multiplication, and division.</li>
                      <li>Implemented a dynamic contact form, allowing users of the website to efficiently send messages to me via email.</li>
                    </ul>
                </div>
            </div>
            <div className='projectBar'>
                <img src={WebsiteLogo} alt="Website" className='projectBarImg' />
                <div className='projectBarText'>
                <a className='ProjectWebsiteSC' href="https://github.com/azowmann/Website" target="_blank">Portfolio Website</a>
                    <ul class='portwebdesc'>
                      <li>Created a responsive website showcasing my portfolio with a seamless viewing experience across different devices and screen sizes, enhancing accessibility and user engagement.</li>
                      <li>Enhanced the user-friendliness of the website by implementing interactive features such as a dynamic menu and scroll effects, delivering an engaging and intuitive browsing experience for visitors.</li>
                    </ul>
                </div>
            </div>
            <div className='projectBar'>
                <img src={ExtensionLogo} alt="Website" className='projectBarImg' />
                <div className='projectBarText'>
                <a className='ProjectWebsiteSC' href="https://github.com/azowmann/Know-your-Macros" target="_blank">Know Your Macros</a>
                    <ul class='extensiondesc'>
                      <li>Developed a Google Chrome extension that retrieves a macronutrient of choice (calories, fats, carbohydrates, proteins) of the food by user input through API Ninjas Nutrition API. This extension makes finding general information on foods faster and more accessible. </li>
                      <li>Sampled by five peers of mine to test functionality. It is found useful often for those who meal-prep, and those with specific nutrition goals, as the fast retrieval of information makes it easy to know exactly what to shop for. </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects;