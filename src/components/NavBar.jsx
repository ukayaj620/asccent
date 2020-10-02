import React, { useState } from 'react';
import useScrollHeight from '../hooks/useScrollHeight';

const NavBar = () => {
  const _height = useScrollHeight();

  return (
    <nav class={_height > 80 ? 'navbar active' : 'navbar unactive' }>
      <li>Hello 1</li>
      <li>Hello 2</li>
    </nav>
  );
};


export default NavBar;
