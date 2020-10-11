import React from 'react';
import NavBar from '../components/NavBar';
import image from '../helpers/image';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <img
        style={{ marginTop: '-5rem' }} 
        src={image.load('bg_contact')}
      />
    </div>
  );
};

export default Contact;