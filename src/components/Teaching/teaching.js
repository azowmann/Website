import React from 'react';
import './teaching.css';

const Teaching = () => {
  return (
    <section id='teaching'>
        <span className="teachingTitle">Teaching Experience</span>
        <div className='projectBars'>
            <div className='projectBar'>
                <img src="" alt="Calculator" className='projectBarImg' />
                <div className='projectBarText'>
                    <h2>Math Assistant Teacher</h2>
                    <p>This is demo text, write smth here abt it</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Teaching;