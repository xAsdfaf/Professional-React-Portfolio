import React from 'react';
import '../../index.css';
import Fader from './Fader';
import videoBg from '../assets/images/videoBg.mp4';
export default function About() {
  return (
    <div className='main'>
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted/>
      <div className='content'>
        <h1>GEORGE JORDAN</h1>
        <p>Future FullStack Web Developer</p>
        <Fader className='fader'></Fader>
      </div>
    </div>
  );
}
