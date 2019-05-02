import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import '../../Form.scss'
import dbOffices from '../../../db/dboffices'
import PositiveMessage from '../../../Layout/Message/PositiveMessage'

class FormSolicitant extends Component {
  state = {
    messageVisible: false,
    lead_source: null
  }

  handleInput = (name, event) => {
    let change = {}
    change[name] = event.target.value
    this.setState({
      ...change
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state, 'solicitant')
    this.setState({
      messageVisible: true
    })
  }

  close = () => {
    this.props.closeForm('solicitantBtn')
  }

  render() {  
    const { messageVisible, lead_source } = this.state
    return (
      <div>
        <PositiveMessage visible={messageVisible} onClose={this.close} >
          <span>Solicitant created with success!</span>
          <p>Good job!</p>
        </PositiveMessage>
        <Form className='form-border' onSubmit={ this.handleSubmit }>
          <h3>Nieuwe Solicitant</h3>
          <Form.Group widths='equal'>
            <Form.Input required fluid label='Voornaam' placeholder='Voornaam' onChange= { e => this.handleInput('first_name', e) }/>
            <Form.Input required fluid label='Achternaam' placeholder='Achternaam' onChange= { e => this.handleInput('last_name', e)  }/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='E-mail' type="email" placeholder='E-mail' onChange= { e => this.handleInput('email', e) }/>
            <Form.Input required fluid label='GSM-Nummer' placeholder='GSM-Nummer' type="number" onChange= { e => this.handleInput('mobile', e) }/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input required fluid label='Straat' placeholder='Straat' onChange= { e => this.handleInput('street', e) }/>
            <Form.Input fluid label='Box' placeholder='Box' onChange= { e => this.handleInput('Box__c', e) }/>
            <Form.Input required fluid type="number" label='Postcode' placeholder='Postcode' onChange= { e => this.handleInput('zip', e) } />
            <Form.Input required fluid label='Gemeente' placeholder='Gemeente' onChange= { e => this.handleInput('city', e) }/>
          </Form.Group>
          <Form.Select fluid required label='Oorsprong' options={dbOffices.originSolicitant} placeholder='Collega' onChange= { e => this.setState({ lead_source: e.target.innerText }) }/>
          {lead_source === 'Actie' && <Form.Group widths='equal'>
            <Form.Input required fluid label='Name' placeholder='bv: Kerstmis' onChange={e => this.handleInput('NaamActie__c', e)} />
            <Form.Input required fluid label='Detail' placeholder='bv: 24 December' onChange={e => this.handleInput('DetailActie__c', e)} />
          </Form.Group>}
          <Form.Button color='orange'>Bevestigen</Form.Button>
        </Form>
      </div>
    )
  }
}

export default FormSolicitant;