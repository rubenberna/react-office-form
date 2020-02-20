import React from 'react';
import { withRouter } from 'react-router-dom'

import { offices, strijkOffices } from '../db/dboffices'
import './Login.scss';
import LoginSwitch from './LoginSwitch'
import LoginFormGewoon from './Form/LoginFormGewoon'
import LoginFormStrijk from './Form/LoginFormStrijk'
import Loader from '../Layout/Loader/Loader'
import NegativeMessage from '../Layout/Message/NegativeMessage'

class LoginContainer extends React.Component {
  state = {
    offices: offices,
    strijkOffices: strijkOffices,
    messageVisible: false,
    selectedLogin: ''
  }

  validate = selected => {

    const list = selected.type === 'gewoon' ? this.state.offices : this.state.strijkOffices
    const { history, onLoggedIn } = this.props
    const obj = list.find( obj => obj.name === selected.office )

    if ( obj.password !== selected.password ) {
      this.setState({
        messageVisible: true
      })
    } else {
      onLoggedIn(obj)
      history.push('/')
    }
  }

  renderLogin() {
    const { offices, selectedLogin, strijkOffices } = this.state
    if (!offices) return (<Loader/>)
    else if (selectedLogin === 'gewoon') return <LoginFormGewoon list={ offices } onFormSubmit={this.validate} />
    else if (selectedLogin === 'strijk') return <LoginFormStrijk list={ strijkOffices } onFormSubmit={this.validate} />
  }

  selectLogin = (name) => {
    this.setState({ selectedLogin: name })
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
          <span>Helaas pindakaas </span>
          <p>Je password is niet juist ingevuld !</p>
        </NegativeMessage>
        <LoginSwitch selectLogin={this.selectLogin}/>
        { this.renderLogin() }
      </div>
    )
  }
}

export default withRouter(LoginContainer);
