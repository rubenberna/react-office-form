import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { slideInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import '../../Form.scss'
import { originSolicitant } from '../../../db/dboffices'
import NegativeMessage from '../../../Layout/Message/NegativeMessage'
import Loader from '../../../Layout/Loader/Loader'
import GreatSuccess from '../../../Layout/Gifs/Giphy'

const slideInAnimation = keyframes`${slideInUp}`;

const AnimationDiv = styled.div`
  animation: 1s ${slideInAnimation};
  background: #F9FAFB;
`;

class FormSolicitant extends Component {
  state = {
    messageVisible: false,
    originError: null,
    cityError: null,
    lead_source: '',
    disabled: false,
    loadingInput: false,
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    street: '',
    Box__c: '',
    zip: '',
    city: '',
    NaamActie__c: '',
    DetailActie__c: ''
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
    const { onFormSubmit, closeForm, closeError } = this.props
    const { lead_source, city } = this.state

    if (!city) this.setState({ cityError: true })
    else if (!lead_source) this.setState({ originError: true })
    else {
      onFormSubmit(this.state, 'solicitant')
      this.setState({
        loading: true,
        disabled: true
       })
      setTimeout(() => {
        this.setState({ loading: false })
        this.toggleSuccess()}, 1000 )
      setTimeout(() => {
        closeForm('solicitantBtn')
        closeError()
      }, 8000)
    }
  }

  render() {
    const { messageVisible, lead_source, loading, disabled, originError } = this.state
    const { error, closeError } = this.props
    return (
      <div>
        {messageVisible && <GreatSuccess />}
        {
          <AnimationDiv>
              <Form className='form-border' onSubmit={ this.handleSubmit }>
                  <h3>Nieuwe Solicitant</h3>
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
                    <Form.Select required fluid disabled={disabled} error={ originError } onFocus={ e => this.clearFieldError('originError') } label='Oorsprong' options={originSolicitant} placeholder='Collega' onChange= { e => this.setState({ lead_source: e.target.innerText }) }/>
                        {lead_source === 'Actie' && <Form.Group widths='equal'>
                    <Form.Input required disabled={ disabled } fluid label='Name' placeholder='bv: Kerstmis' onChange={e => this.handleInput('NaamActie__c', e)} />
                    <Form.Input required disabled={ disabled } fluid label='Detail' placeholder='bv: 24 December' onChange={e => this.handleInput('DetailActie__c', e)} />
                  </Form.Group>}
                  <Form.Button color='orange'>Bevestigen</Form.Button>
                </Form>
            </AnimationDiv>
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
