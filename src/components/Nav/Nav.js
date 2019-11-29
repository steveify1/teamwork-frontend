import React from 'react';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';
import './Nav.css';

// Navigation
const Nav = (props) => {
  return (<nav id='main-nav'>
    {/* Logo */}
    <h1 id='logo'>Teamwork</h1>

    {/* Main Menu */}
    <div className='search-area'>
      <InputField type='text' />
    </div>
    <div className='menu main-menu'>
      {/* Hamburger */}
      <p className='hamburger'>MENU</p>
      {/* Menu Items */}
      <ul>
        <li>Search</li>
        <li><Link to='/' className='active'>Stories</Link></li>
        <li><Link to='/post/new'>Workspace</Link></li>
        <li><Link to='/user/id'>Tracker</Link></li>
        <li><Link to='/logout'>Teams</Link></li>
        <li><Link onClick={props.triggerSignOut} to='/'>Logout</Link></li>
      </ul>
    </div>
  </nav>);
}

export default Nav;
