import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import '../../Form.scss'
import dbOffices from '../../../db/dboffices'
import Iframe from 'react-iframe'
import styled, { keyframes } from 'styled-components';
import { slideInRight, fadeIn } from 'react-animations';


const slideInAnimation = keyframes`${slideInRight}`;
const fadeInAnimation = keyframes`${fadeIn}`;

const AnimationDiv = styled.div`
  animation: 1s ${slideInAnimation};
`;

const SloganDiv = styled.div`
  animation: 2s ${fadeInAnimation};
`;

class FormSolicitant extends Component {
  state = {
    messageVisible: false,
    lead_source: null,
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
    const { onFormSubmit, closeForm } = this.props
    onFormSubmit(this.state, 'solicitant')
    this.setState({
      messageVisible: true
    })
    setTimeout(() => { closeForm('solicitantBtn')}, 5000)
  }

  render() {  
    const { messageVisible, lead_source } = this.state
    return (
      <div>
        { messageVisible && 
          <div>
            <div className="gif">
              <Iframe url="https://giphy.com/embed/l4pTfx2qLszoacZRS"
                width="480px"
                height="480px"
                id="myId"
                className="myClassname"
                display="initial"
                frameBorder="0"
                position="relative"
                /> 
            </div>
            <SloganDiv className='slogan'>
            <h2>Goed gedaan !</h2>
            </SloganDiv> 
          </div>
        }
        { !messageVisible && 
            <AnimationDiv>
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
            </AnimationDiv>
        }
      </div>
    )
  }
}

export default FormSolicitant;