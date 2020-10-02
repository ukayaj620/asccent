import React from 'react';
import image from '../helpers/image';

const Home = () => {
  return (
    <div>
      <img style={{ marginTop: '-5rem' }} src={image.load('background')}/>
    </div>
  );
};

export default Home;
