import React from 'react';
import './Login.scss';
import LoginForm from './Form/LoginForm'
import { withRouter } from 'react-router-dom'
import Loader from '../Layout/Loader/Loader'
import NegativeMessage from '../Layout/Message/NegativeMessage'
import db from '../db/dboffices'

class LoginContainer extends React.Component {
  state = {
    offices: db.offices.sort(this.compare),
    messageVisible: false
  }

  validate = selected => {
    const { offices } = this.state
    const { history } = this.props
    const { onLoggedIn } = this.props
    const obj = offices.find( obj => obj.name === selected.office )    
    
    if ( obj.password !== selected.password ) {
      this.setState({
        messageVisible: true
      })
    } else { 
      onLoggedIn(obj)
      history.push('/')
    }
  }

  compare(a, b) {
    const nameA = a.name
    const nameB = b.name

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison
  }

  renderLoading() {    
    const { offices } = this.state      
    if (!offices) return (<Loader/>)
    else return (
      <LoginForm 
        list={ offices } 
        onFormSubmit={this.validate}/>
      )
  }
  
  closeMsg = () => {
    this.setState({
      messageVisible: false
    })
  }

  render() {
    const { messageVisible } =  this.state

    return (
      <div className="login-container">
        <NegativeMessage visible={ messageVisible } onClose={ this.closeMsg } > 
          <span>Password is wrong :( </span>
          <p>It should be easy</p>
        </NegativeMessage> 
        { this.renderLoading() }
      </div>
    )
  }
}

export default withRouter(LoginContainer);

