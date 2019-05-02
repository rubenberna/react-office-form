import React from 'react';
import '../Navbar.scss'

const NavbarLogoutButton = ({office, quitSession}) => {

  return(
    <button 
      className={"ui red button logout-btn " + (office ? 'show' : 'hide')}
      onClick={quitSession}>
      <i className="icon user"></i>
        Logout
    </button>
  )
}

export default NavbarLogoutButton;