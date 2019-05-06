import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import '../../Form.scss'
import dbOffices from '../../../db/dboffices'
import Gif from '../../../Layout/Animations/Gif'
import Slogan from '../../../Layout/Animations/Slogan'
import NegativeMessage from '../../../Layout/Message/NegativeMessage'
import Loader from '../../../Layout/Loader/Loader'
import CheckIcon from '../../../Layout/CheckIcon/CheckIcon'
import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';


const slideInAnimation = keyframes`${slideInRight}`;

const AnimationDiv = styled.div`
  animation: 1s ${slideInAnimation};
  background: #F9FAFB;
`;

class FormSolicitant extends Component {
  state = {
    messageVisible: false,
    lead_source: null,
    disabled: false
  }

  handleInput = (name, event) => {
    let change = {}
    change[name] = event.target.value
    this.setState({
      ...change
    })
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
      }, 4500)
  }

  render() {  
    const { messageVisible, lead_source, loading, disabled } = this.state
    const { error, closeError } = this.props
    return (
      <div>
        { messageVisible && <CheckIcon/> }
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
                    <Form.Input required disabled={ disabled } fluid type="number" label='Postcode' placeholder='Postcode' onChange= { e => this.handleInput('zip', e) } />
                    <Form.Input required disabled={ disabled } fluid label='Gemeente' placeholder='Gemeente' onChange= { e => this.handleInput('city', e) }/>
                  </Form.Group>
                  <Form.Select fluid disabled={ disabled } required label='Oorsprong' options={dbOffices.originSolicitant} placeholder='Collega' onChange= { e => this.setState({ lead_source: e.target.innerText }) }/>
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