import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginContainer from './Login/LoginContainer'
import FormContainer from './Form/FormContainer'
import SubmissionsContainer from './Login/SubmissionsContainer'


import Navbar from './Layout/Navbar/Navbar'

class App extends React.Component {
  state = {
    user: JSON.parse(localStorage.getItem('user')),
  }

  saveUser = user => {
    localStorage.setItem('user', JSON.stringify(user))
    this.setState({
      user
    })
  }

  logoutUser = () => {
    localStorage.removeItem('user')
    this.setState({
      user: null
    })
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <Navbar
            office={ this.state.user }
            onLogout={ this.logoutUser }
            />
          <Route
            path="/"
            exact
            render={ () => <FormContainer
            user={ this.state.user }
             />}
          />
          <Route
            path="/login"
            render={() => <LoginContainer
            onLoggedIn={ this.saveUser } />}
            />
             <Route
            path="/details"
            render={this.state.user != null ?() => <SubmissionsContainer/> : ""}
            />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
