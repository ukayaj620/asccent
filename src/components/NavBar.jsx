import React from 'react';
import image from '../helpers/image';
import useScrollHeight from '../hooks/useScrollHeight';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const _height = useScrollHeight();
  const _location = useLocation();

  const _activePath = (path) => path === _location.pathname;

  return (
    <nav class={_height > 80 ? 'navbar active' : 'navbar unactive' }>
      <div className="flex flex-row justify-center items-center">
        <img className="w-16 h-16 mr-4" src={image.load(_height > 80 ? 'brand' : 'brand-white')} />
        <h1 className={_height > 80 ? 'active' : ''}>Asccent Automobile</h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        {headerLinks.map(({ name, path }, index) => (
          <NavLink 
            key={`#nav-link-${name}-${index}`}
            to={path}
            className={`px-2 ${_height > 80 ? 'active' : ''}`}
            activeClassName="link"
            isActive={() => _activePath(path)}
          >
            {name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

const headerLinks = [
  {
    name: 'HOME',
    path: '/home',
  },
  {
    name: 'ABOUT US',
    path: '/about',
  },
  {
    name: 'CONTACT US',
    path: '/contact',
  }
]


export default NavBar;
