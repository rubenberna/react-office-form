import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../../assets/img/logo.png'
import Logout from './buttons/NavbarLogoutButton'
import Login from './buttons/NavbarLoginButton'
import LatestButton from './buttons/LatestButton'

const Navbar = ({ office, onLogout, history }) => {

  const message = () => {
    if (office) return (
      <div className='navbar-greeting-message'>
        <h2>Hallo, {office.name}!</h2>
        {office.type === 'strijk' && <h1 className='navbar-greeting-message-strijk'>strijk</h1>}
      </div>
    )
  };

  const renderButtons = () => {

    if (office) {
      return (
        <div className='nav-buttons'>
          <LatestButton />
          <Logout office={office} quitSession={onLogout} />
        </div>
      )
    } else return (<Login />)
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

export default withRouter(Navbar);
