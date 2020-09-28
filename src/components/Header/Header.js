import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = ({ search, setSearch }) => {
  return (
    <header className='Header-header'>
      <div className='Header-logo'>
        <Link to='/'>
          <img src='/images/logo.png' alt='Flash news' />
        </Link>
      </div>
      <input
        className='Header-search-field'
        type='text'
        placeholder='Type to search..'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <img
        className='search-icon'
        src='/images/search-black-18dp.svg'
        alt='search'
      />
    </header>
  );
};
