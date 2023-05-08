import React from 'react';
import '../../index.css';
import Resume from '../assets/images/resume.png'
import videoBg from '../assets/images/videoBg.mp4';
export default function Home() {
  return (
    <div className='main'>
    <div className='overlay'></div>
    <video src={videoBg} autoPlay loop muted/>
    <div>
      {/* <h1 className='resume-header'>Home Page</h1> */}
      <p className='resume-body'>
       Below you will find my complete resume, clicking on it will bring you to a download page.
      </p>
      <a href='https://drive.google.com/file/d/1DGWQIC6ohva6XmuH2DQ7wr82GQ3KKSgY/view?usp=share_link'>
      <img className='resume-img' alt='resume' src={Resume}></img>
      </a>
    </div>
    </div>
  );
}
