import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import '../../Form.scss'
import { withRouter } from 'react-router-dom'
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

class FormKlant extends Component {
  state = {
    messageVisible: false, 
    Maandagpicklist__c: 'Niet mogelijk',
    Dinsdagpicklist__c: 'Niet mogelijk',
    Woensdagpicklist__c: 'Niet mogelijk',
    Donderdagpicklist__c: 'Niet mogelijk',
    Vrijdagpicklist__c: 'Niet mogelijk',
    Zaterdagpicklist__c: 'Niet mogelijk',
    lead_source: null
  }

  handleRadioChange = (e, { value }) => {
    this.setState({ 
      Frequentie__c: value
     }) 
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
    onFormSubmit(this.state, 'lead')
    this.setState({
      messageVisible: true
    })
    setTimeout(() => { closeForm('klantBtn')}, 5000)
  }

  render() {
    const { Frequentie__c, messageVisible, lead_source } = this.state
    return (
      <div>
        {messageVisible &&
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
            <Form className='form-border' 
                onSubmit={ this.handleSubmit }>
              <h3>Nieuwe Klant</h3>
              <Form.Group widths='equal'>
                <Form.Input required fluid label='Voornaam' placeholder='Voornaam' onChange= { e => this.handleInput('first_name', e) }/>
                <Form.Input required fluid label='Achternaam' placeholder='Achternaam' onChange= { e => this.handleInput('last_name', e)  }/>
                <Form.Select required fluid label='Taal' options={ dbOffices.languages } placeholder= 'Taal' onChange= { e => this.setState({ language_lead__c: e.target.innerText }) }
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input fluid label='E-mail' placeholder='E-mail' type="email" onChange= { e => this.handleInput('email', e) }/>
                <Form.Input required fluid label='GSM-Nummer' placeholder='GSM-Nummer' type="number" onChange= { e => this.handleInput('mobile', e) }/>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input required fluid label='Straat' placeholder='Straat' onChange= { e => this.handleInput('street', e) }/>
                <Form.Input fluid label='Box' placeholder='Box' onChange= { e => this.handleInput('Box__c', e) }/>
                <Form.Input required fluid label='Postcode' type='number' placeholder='Postcode' onChange= { e => this.handleInput('zip', e) }/>
                <Form.Input required fluid label='Gemeente' placeholder='Gemeente' onChange= { e => this.handleInput('city', e) }/>
              </Form.Group>
              <Form.Input  required fluid label='Gewenst aantal uren (Per week)' placeholder='bv: 3' type='number' onChange= { e => this.handleInput('Gewenst_aantal_uren_per_week__c', e) }/>
              <Form.TextArea required label='Bijkomende info' placeholder='bv: heeft u huisdieren?' onChange= { e => this.handleInput('Wensen__c', e) }/>
              <Form.Group inline required>
                <label>Hoevaak?</label>
                <Form.Radio
                  label='Wekelijks'
                  value='Wekelijks'
                  checked={ Frequentie__c === 'Wekelijks'}
                  onChange={this.handleRadioChange}
                />
                <Form.Radio
                  label='Niet geweten'
                  value='Niet geweten'
                  checked={ Frequentie__c === 'Niet geweten'}
                  onChange={this.handleRadioChange}
                />
                <Form.Radio
                  label='Tweewekelijks'
                  value='Tweewekelijks'
                  checked={ Frequentie__c === 'Tweewekelijks'}
                  onChange={this.handleRadioChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select fluid label='Maandag' defaultValue="Niet mogelijk" options={dbOffices.availabilityKlant} placeholder='Niet mogelijk' onChange= { e => this.setState({ 'Maandagpicklist__c': e.target.innerText }) }/>
                <Form.Select fluid label='Dinsdag' defaultValue="Niet mogelijk" options={dbOffices.availabilityKlant} placeholder='Niet mogelijk' onChange= { e => this.setState({ 'Dinsdagpicklist__c': e.target.innerText }) }/>
                <Form.Select fluid label='Woensdag' defaultValue="Niet mogelijk" options={dbOffices.availabilityKlant} placeholder='Niet mogelijk' onChange= { e => this.setState({ Woensdagpicklist__c: e.target.innerText }) }/>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select fluid label='Donderdag' defaultValue="Niet mogelijk" options={dbOffices.availabilityKlant} placeholder='Niet mogelijk' onChange= { e => this.setState({ 'Donderdagpicklist__c': e.target.innerText }) }/>
                <Form.Select fluid label='Vrijdag' defaultValue="Niet mogelijk" options={dbOffices.availabilityKlant} placeholder='Niet mogelijk' onChange= { e => this.setState({ 'Vrijdagpicklist__c': e.target.innerText }) }/>
                <Form.Select fluid label='Zaterdag' defaultValue="Niet mogelijk" options={dbOffices.availabilityKlant} placeholder='Niet mogelijk' onChange= { e => this.setState({ 'Zaterdagpicklist__c': e.target.innerText }) }/>
              </Form.Group>
              <Form.Select fluid required label='Oorsprong' options={dbOffices.originKlant} placeholder='Telefoon' onChange= { e => this.setState({ lead_source: e.target.innerText }) }/>
              {lead_source === 'Actie' && <Form.Group widths='equal'>
                <Form.Input required fluid label='Name' placeholder='bv: Kerstmis' onChange={e => this.handleInput('NaamActie__c', e)} />
                <Form.Input required fluid label='Detail' placeholder='bv: 24 December' onChange={e => this.handleInput('DetailActie__c', e)} />
              </Form.Group> }
              <Form.Button type="submit" name="submit" color='orange'>Bevestigen</Form.Button>
            </Form>
          </AnimationDiv>
        }
      </div>
    )
  }
}

export default withRouter(FormKlant)