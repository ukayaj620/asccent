import React, { useState } from 'react';
import image from '../helpers/image';
import useScrollHeight from '../hooks/useScrollHeight';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

const Drawer = ({ open, close }) => {
  const _history = useHistory();
  const _location = useLocation();

  const _activePath = (path) => path === _location.pathname;
  const _isLastLabel = (index) => index === headerLinks.length-1;

  return (
    <div className="absolute left-0 top-0">
      <div 
        className={`flex flex-col p-4 lg:hidden absolute transition duration-200 bg-gray-100 
          left-0 top-0 transform h-screen w-64 z-20 ${open ? 'translate-x-0' : '-translate-x-full'}`} 
      >
        <div onClick={close} className="self-end mb-4">
          <img
            className="w-6"
            src={image.load('cross')}
            alt="Close"
          />
        </div>
        {headerLinks.map(({ name, path }, index) => (
          <NavLink 
            key={`#nav-link-${name}-${index}`}
            to={path}
            className={`
              active border-t-2 py-2 text-base
              ${_isLastLabel(index) ? 'border-b-2' : ''}
            `}
            activeClassName="link"
            isActive={() => _activePath(path)}
          >
            {name}
          </NavLink>
        ))}
      </div>
      <div
        onClick={close}
        className={`bg-muted absolute top-0 left-0 opacity-75 z-10 w-screen h-screen lg:hidden 
        ${open ? 'block' : 'hidden'}`} 
      />
    </div>
  );
};

const NavBar = ({ active }) => {
  const [_drawerOpen, _setDrawerOpen] = useState(false);
  const _height = useScrollHeight();
  const _location = useLocation();

  const _activePath = (path) => path === _location.pathname;
  const _openDrawer = () => _setDrawerOpen(true);
  const _closeDrawer = () => _setDrawerOpen(false);

  const _determineActive = () => _height > 80 || active

  return (
    <nav class={`flex-row-reverse lg:flex-row ${_determineActive() ? 'navbar active' : 'navbar unactive'}`}>
      <div className="flex flex-row justify-center items-center">
        <img className="w-12 lg:w-16 lg:mr-4" src={image.load(_determineActive() ? 'brand' : 'brand-white')} />
        <h1 className={`hidden lg:flex ${_determineActive()  ? 'active' : ''}`}>Asccent Automobile</h1>
      </div>
      <Drawer open={_drawerOpen} close={_closeDrawer} />
      <div onClick={_openDrawer} className="lg:hidden">
        <img
          className="w-8"
          src={image.load(_determineActive() ? 'menu-active' : 'menu-unactive')}
          alt="Menu"
        />
      </div>
      <div className="hidden lg:flex flex-row justify-center items-center">
        {headerLinks.map(({ name, path }, index) => (
          <NavLink 
            key={`#nav-link-${name}-${index}`}
            to={path}
            className={`px-2 ${_determineActive() ? 'active' : ''}`}
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
    path: '/',
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
