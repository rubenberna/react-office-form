import React from 'react';
import logo from '../../../assets/img/logo.png'
import './Navbar.scss'
import Logout from './buttons/NavbarLogoutButton'
import Login from './buttons/NavbarLoginButton'
import SubmissionsButton from './buttons/SubmissionsButton'

import { Link } from 'react-router-dom'

const Navbar = ({ office, onLogout }) => {

  const message = () => {
    if(office) return (
      <div className='navbar-greeting-message'>
        <h2>Hallo, {office.name}!</h2>
        { office.type === 'strijk' && <h1 className='navbar-greeting-message-strijk'>strijk</h1>}
      </div>
    )
  };

  const renderButtons = () => {
    if (office) {
      return(
        <div className="nav-button">
          <SubmissionsButton/>
      <Logout office={ office } quitSession={ onLogout }/>
    
      </div>
        )
    } else {
      return (<Login />)
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-greeting">
          {message()}
        </div>
      </div>
      {renderButtons()}
    </div>
  )
}

export default Navbar;
