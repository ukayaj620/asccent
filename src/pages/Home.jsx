import React from 'react';
import NavBar from '../components/NavBar';
import image from '../helpers/image';

const Home = () => {
  return (
    <div>
      <NavBar />
      <img style={{ marginTop: '-5rem' }} src={image.load('background')}/>
    </div>
  );
};

export default Home;
