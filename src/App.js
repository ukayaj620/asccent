import React from 'react';
import NavBar from './components/NavBar';
import image from './helpers/image';

const App = () => {
  return (
    <div className="relative flex flex-col w-full">
      <NavBar />
      <img style={{ marginTop: '-5rem' }} src={image.load('background')}/>
    </div>
  );
}

export default App;
