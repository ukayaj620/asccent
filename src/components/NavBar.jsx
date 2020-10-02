import React, { useState } from 'react';
import image from '../helpers/image';
import useScrollHeight from '../hooks/useScrollHeight';

const NavBar = () => {
  const _height = useScrollHeight();

  return (
    <nav class={_height > 80 ? 'navbar active' : 'navbar unactive' }>
      <div className="flex flex-row justify-center items-center">
        <img class="w-16 h-16 mr-4" src={image.load(_height > 80 ? 'brand' : 'brand-white')} />
        <h1 class={_height > 80 ? 'active' : ''}>Asccent Automobile</h1>
      </div>
    </nav>
  );
};


export default NavBar;
