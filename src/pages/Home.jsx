import React from 'react';
import NavBar from '../components/NavBar';
import image from '../helpers/image';
import ReactPlayer from 'react-player';
import variables from '../variables';

const Home = () => {
  return (
    <div>
      <NavBar />
      <img 
        className="h-full" 
        style={{ marginTop: '-5rem' }} 
        src={image.load('bg_home')}
      />
      <div className="flex flex-col items-center video-container">
        <h2 className="my-4">Upcoming Event</h2>
        <ReactPlayer url={variables.asccent} />
      </div>
    </div>
  );
};

export default Home;
