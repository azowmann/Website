import React from 'react';
import './works.css';
import Alina from '../../pictures/download.jpg';
import Content from '../../pictures/meinchi.jpg';
import Sports from '../../pictures/football.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>Passions</h2>
        <span className='worksDesc'>smth to write right here</span>
        <div className='worksBars'>
          <div className='worksBar'>
            <div className='worksBarContent'>
              <div className='worksBarTitle'>
                <p>Music</p>
              </div>
              <img src={Alina} alt='' className='worksImg' />
              <div className='worksBarText'>
                <p>asdfasdf</p>
              </div>
            </div>
          </div>
          <div className='worksBar'>
            <div className='worksBarContent'>
              <div className='worksBarTitle'>
                <p>Content</p>
              </div>
              <img src={Content} alt='' className='worksImg' />
              <div className='worksBarText'>
                <p>asdfasdf</p>
              </div>
            </div>
          </div>
          <div className='worksBar'>
            <div className='worksBarContent'>
              <div className='worksBarTitle'>
                <p>Sports</p>
              </div>
              <img src={Sports} alt='' className='worksImg' />
              <div className='worksBarText'>
                <p>asdfasdf</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Works;
