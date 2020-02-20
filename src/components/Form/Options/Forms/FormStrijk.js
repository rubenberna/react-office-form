import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import '../../Form.scss'
import NegativeMessage from '../../../Layout/Message/NegativeMessage'
import Loader from '../../../Layout/Loader/Loader'
import GreatSuccess from '../../../Layout/Gifs/Giphy'

class FormSolicitant extends Component {
  state = {
    messageVisible: false,
    disabled: false,
    loadingInput: false,
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    street: '',
    Box__c: '',
    zip: '',
    city: ''
  }

  handleInput = (name, event) => {
    let change = {}
    let inputValue = event.target.value
    if (name === 'first_name' || 'last_name') {
      inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    }
    change[name] = inputValue
    this.setState({
      ...change
    })
  }

  clearFieldError = (stateField) => {
    const change = {}
    change[stateField] = false
    this.setState({
      ...change })
  }

  toggleSuccess = () => {
    const { error } = this.props
    if(!error) {
      this.setState({
        messageVisible: true
      })
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { onFormSubmit } = this.props
    onFormSubmit(this.state, 'strijk')
    this.setState({
      loading: true,
      disabled: true
     })
    setTimeout(() => {
      this.setState({ loading: false })
      this.toggleSuccess()}, 700 )
      setTimeout(() => {
        this.setState({
          disabled: false,
          messageVisible: false
        })
      }, 7000)
  }

  render() {
    const { messageVisible, loading, disabled } = this.state
    const { error, closeError } = this.props
    return (
      <div>
        {messageVisible && <GreatSuccess />}
        {
          <Form className='form-strijk' onSubmit={ this.handleSubmit }>
            <h3>Nieuwe Strijk Klant</h3>
            <Form.Group widths='equal'>
              <Form.Input required disabled={ disabled } fluid label='Voornaam' placeholder='Voornaam' onChange= { e => this.handleInput('first_name', e) }/>
              <Form.Input required disabled={ disabled } fluid label='Achternaam' placeholder='Achternaam' onChange= { e => this.handleInput('last_name', e)  }/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid disabled={ disabled }label='E-mail' type="email" placeholder='E-mail' onChange= { e => this.handleInput('email', e) }/>
              <Form.Input required disabled={ disabled } fluid label='GSM-Nummer' placeholder='GSM-Nummer' type="number" onChange= { e => this.handleInput('mobile', e) }/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input required disabled={ disabled } fluid label='Straat' placeholder='Straat' onChange= { e => this.handleInput('street', e) }/>
              <Form.Input fluid disabled={ disabled } label='Box' placeholder='Box' onChange= { e => this.handleInput('Box__c', e) }/>
              <Form.Input required fluid disabled={ disabled } label='Postcode' type='number' placeholder='Postcode' onChange={ e => this.handleInput('zip', e)  }/>
              <Form.Input required fluid disabled={ disabled } label='Gemeente' type='text' placeholder='Gemeente' onChange={ e => this.handleInput('city', e) }/>
            </Form.Group>
            <Form.Button color='orange'>Bevestigen</Form.Button>
          </Form>
        }
        {
          <NegativeMessage visible={error} onClose={closeError} >
            <span>Something went wrong :(</span>
            <p>Please contact Red Carrots team</p>
          </NegativeMessage>
        }
        { loading && <Loader className='loader-form' /> }
      </div>
    )
  }
}

export default FormSolicitant;
