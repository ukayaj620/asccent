import React from 'react';
import NavBar from '../components/NavBar';
import image from '../helpers/image';

const Home = () => {
  return (
    <div>
      <NavBar />
      <img 
        className="h-full" 
        style={{ marginTop: '-5rem' }} 
        src={image.load('bg_home')}
      />
    </div>
  );
};

export default Home;
