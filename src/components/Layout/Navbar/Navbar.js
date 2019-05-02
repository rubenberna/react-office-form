import React from 'react';
import logo from '../../../assets/img/logo.png'
import './Navbar.scss'
import Logout from './buttons/NavbarLogoutButton'
import Login from './buttons/NavbarLoginButton'
import { Link } from 'react-router-dom'

const Navbar = ({ office, onLogout }) => {

  const message = () => {
    if(office) return (<h2>Hallo, {office.name}!</h2>)
  };

  const renderButtons = () => {
    if (office) {
      return(<Logout office={ office } quitSession={ onLogout }/>)
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