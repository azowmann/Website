import React from 'react';
import './works.css';
import Alina from '../../pictures/download.jpg';
import Content from '../../pictures/meinchi.jpg';
import Sports from '../../pictures/football.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>Passions</h2>
        <span className='worksDesc'>Below are just some of my most recent passions!</span>
        <div className='worksBars'>
          <div className='worksBar'>
            <div className='worksBarContent'>
              <div className='worksBarTitle'>
                <p>Music</p>
              </div>
              <img src={Alina} alt='' className='worksImg' />
              <div className='worksBarText'>
                <p>I have always loved music. It has the ability to affect my mood in whichever song I choose to play. Some of my favourite artists right now include Alina Baraz, Jorja Smith, and New Jeans.</p>
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
                <p>Making content is something that I only just recently started, but find quite interesting. From my own experience, I have enjoyed many forms of short form video content, and I try to make my own mostly for my own pleasure, while inspiring others is simply a bonus. Check out my TikTok account!</p>
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
                <p>Sports has been a form of entertainment and exercise that I don't think will ever leave my life. I have always been a big advocate for healthy living, and being involved in sports is such an easy way to keep my body in shape.</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Works;
