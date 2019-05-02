import React from 'react';
import '../Navbar.scss'
import {
  withRouter
} from 'react-router-dom'

class NavbarLoginButton extends React.Component {
  
  openLoginForm = async () => {
    this.props.history.push('/login')   
   }
  
  render() {
    return(
      <button 
        className={"ui red button logout-btn "}
        onClick={ this.openLoginForm } >
        <i className="icon user"></i>
          Login
      </button>
    )
  }
}

export default withRouter(NavbarLoginButton);