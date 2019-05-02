import React from 'react';
import './LoginForm.scss'
import {
  Form,
  Input,
  Button,
  Select
} from 'semantic-ui-react'
import NegativeMessage from '../../Layout/Message/NegativeMessage'
import { withRouter } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      office: null,
      password: null,
      officesList: [],
      messageVisible: false
     }
  }

  componentDidMount() {
    if (!this.props.list) {
      this.props.history.push('/')
    } else {
      const offices = this.props.list
      const list = []  
      offices.map(( office, index ) => {
        let mapped = {
          key: index,
          text: office.name,
          value: office.name
        }
        list.push(mapped)
        this.setState({
          officesList: list
        })
      })    
    }
  }

  handleSubmit = e => {
    e.preventDefault();    
    if (!this.state.password || !this.state.office) {
      this.setState({
        messageVisible: true
      })
      return
    }
    this.props.onFormSubmit(this.state)   
  }

  closeMsg = () => {
    this.setState({
      messageVisible: false
    })
  }

  render() {    
    const { messageVisible } = this.state
    
    return (
      <div>
        <NegativeMessage visible={messageVisible} onClose={this.closeMsg} >
          <span>What are you doing??? </span>
          <p>Please select a Kantoor and password first</p>
        </NegativeMessage>

        <Form onSubmit={ this.handleSubmit }>
          <Form.Group className="login-form" widths='equal'>
            <Form.Field
              control={Select}
              options={this.state.officesList}
              label='Select your Kantoor'
              placeholder='Kantoor'
              onChange={ e => this.setState({ office: e.target.innerText }) }
            />
            <Form.Field
              id='form-input-control-first-name'
              control={Input}
              label='Password'
              type='password'
              placeholder='*******'
              onChange={ e => this.setState({ password: e.target.value })}
            />
          
          <Form.Field
            id='form-button-control-public'
            primary
            control={Button}
            content='Sign in'
          />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default withRouter(LoginForm);

