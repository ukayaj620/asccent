import React from 'react';
import NavBar from '../components/NavBar';
import image from '../helpers/image';

const About = () => {
  return (
    <div>
      <NavBar />
      <img
        style={{ marginTop: '-5rem' }} 
        src={image.load('bg_about')}
        alt="About Amazing Background"
      />
    </div>
  );
};

export default About;
