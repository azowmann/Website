import React from 'react';
import './experience.css';

const Teaching = () => {
  return (
    <section id='experience'>
        <span className="experienceTitle">Experience</span>
        <div className='experienceBars'>
            <div className='experienceBar'>
                <div className='experienceBarText'>
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
            <div className='experienceBar'>
                <div className='experienceBarText'>
                    <h2>Lead Assistant Teacher</h2>
                    <ul class='leadatlist'>
                      <li>Spirit of Math Schools | Aug 2021 -  Jun 2022</li>
                    </ul>
                    <ul class='leadatdesc'>
                      <li>Trained ten new and returning assistant teachers prior to the school year, developing their initial skill set, and reinforcing our values and expectations. </li>
                      <li>Evaluated assistant teacher’s performances with collaboration with respective teachers by progress reports once per semester . This helped principals know of each assistant teacher’s performance throughout the year. </li>
                      <li>Coordinated monthly online meetings to discuss progress, and improvements to be made with regards to being an assistant teacher in and out of the classroom. This maintained standards and ensured assistant teachers fulfilling their responsibilities, needing principals and teachers to micromanage assistant teachers less.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Teaching;