import React from 'react';
import './teaching.css';

const Teaching = () => {
  return (
    <section id='teaching'>
        <span className="teachingTitle">Teaching Experience</span>
        <div className='teachingBars'>
            <div className='teachingBar'>
                <div className='teachingBarText'>
                    <h2>Math Assistant Teacher</h2>
                    <ul class='mathatlist'>
                      <li>Spirit of Math Schools | Sep 2019 -  Jun 2022</li>
                    </ul>
                    <ul class='mathatdesc'>
                      <li>Assisted and taught high-performing students of grades 1 - 12 in after-school mathematics classes</li>
                      <li>Developed and maintained a positive learning atmosphere in the classroom year round</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Teaching;