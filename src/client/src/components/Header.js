import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFire, faGear } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='header'>
        <FontAwesomeIcon icon={faUser} className='icon' />

        <FontAwesomeIcon icon={faFire} className='icon' />

        <FontAwesomeIcon icon={faGear} className='icon' />
    </div>
  )
}

export default Header