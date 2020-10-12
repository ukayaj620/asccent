import React from 'react';
import NavBar from '../components/NavBar';
import image from '../helpers/image';
import ReactPlayer from 'react-player';
import variables from '../variables';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <img 
        className="h-full" 
        style={{ marginTop: '-5rem' }} 
        src={image.load('bg_home')}
        alt="Home Superpower Background"
      />
      <div className="flex flex-col items-center video-container">
        <h2 className="my-4">Upcoming Event</h2>
        <ReactPlayer url={variables.asccent} />
        <h1 className="text-primary my-4">Friday, 16 October 2020</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
