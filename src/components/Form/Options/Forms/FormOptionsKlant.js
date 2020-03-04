import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Form, Checkbox } from 'semantic-ui-react'
import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';
import Autocomplete from 'react-google-autocomplete';

import '../../Form.scss'
import { originKlant, availabilityKlant, languages } from '../../../db/dboffices'
import NegativeMessage from '../../../Layout/Message/NegativeMessage'
import Loader from '../../../Layout/Loader/Loader'
import GreatSuccess from '../../../Layout/Gifs/Giphy'

const slideInAnimation = keyframes`${slideInRight}`;

const AnimationDiv = styled.div`
  animation: 1s ${slideInAnimation};
  background: #F9FAFB;
`;

class FormKlant extends Component {
  state = {
    messageVisible: false,
    loadingInput: false,
    disabled: false,
    originError: null,
    cityError: null,
    langError: null,
    first_name: '',
    last_name: '',
    language_lead__c: '',
    email: '',
    mobile: '',
    street: '',
    Box__c: '',
    zip: '',
    city: '',
    Gewenst_aantal_uren_per_week__c: '',
    strijk: false,
    Wensen__c: '',
    Frequentie__c: '',
    lead_source: '',
    NaamActie__c: '',
    DetailActie__c: '',
    Maandagpicklist__c: 'Niet mogelijk',
    Dinsdagpicklist__c: 'Niet mogelijk',
    Woensdagpicklist__c: 'Niet mogelijk',
    Donderdagpicklist__c: 'Niet mogelijk',
    Vrijdagpicklist__c: 'Niet mogelijk',
    Zaterdagpicklist__c: 'Niet mogelijk',
  }

  handleRadioChange = (e, { value }) => {
    this.setState({
      Frequentie__c: value
     })
  }

  handleStrijkChange = () => {
    this.setState({ strijk: !this.state.strijk })
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

  handleAddress = async (place) => {
    let addressArray = place.formatted_address.split(',')
    let street = addressArray[0]
    let city = addressArray[1].match(/\D/g).join('')
    let zip;
    // If results come with zip code
    if (/[0-9]/.test(addressArray[1])){
      zip = addressArray[1].match(/\d+/)[0]
    } else {
    // If it doens't, fetch with lat long
      let lat = place.geometry.location.lat()
      let lng = place.geometry.location.lng()
      let latlng = `${lat},${lng}`
      zip = await this.getPostCode(latlng)
    }
    this.setState({
      street,
      city,
      zip
    })
  }

  getPostCode = async coords => {
    let params = {
      language: 'nl',
      latlng: coords,
      key: process.env.REACT_APP_GOOGLE_API_KEY
    }
    const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {params})
    const { formatted_address } = res.data.results[0]
    const zip = formatted_address.split(',')[1].match(/\d+/)[0]
    return zip
  }

  clearFieldError = (stateField) => {
    const change = {}
    change[stateField] = false
    this.setState({
      ...change })
  }

  toggleGif = () => {
    const { error } = this.props
    if (!error) {
      this.setState({
        messageVisible: true
      })
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { onFormSubmit, closeForm, closeError } = this.props
    const { lead_source, city, language_lead__c } = this.state

    if (!language_lead__c) this.setState({ langError: true })
    else if (!city) this.setState({ cityError: true })
    else if (!lead_source) this.setState({ originError: true })
    else {
      onFormSubmit(this.state, 'lead')
      this.setState({
        loading: true,
        disabled: true
     })
      setTimeout(() => {
        this.setState({ loading: false })
        this.toggleGif()
      }, 1000)
      setTimeout(() => {
        closeForm('klantBtn')
        closeError()
      }, 8000)
    }
  }

  render() {
    const { Frequentie__c, messageVisible, lead_source, loading, disabled, originError, langError, cityError } = this.state
    const { error, closeError } = this.props
    return (
      <div>
        { messageVisible && <GreatSuccess />}
        {
          <AnimationDiv>
            <Form className='form-border'
                onSubmit={ this.handleSubmit }>
              <h3>Nieuwe Klant</h3>
              <Form.Group widths='equal'>
                <Form.Input required fluid disabled={disabled} label='Voornaam' placeholder='Voornaam' onChange= { e => this.handleInput('first_name', e) }/>
                <Form.Input required fluid disabled={disabled} label='Achternaam' placeholder='Achternaam' onChange= { e => this.handleInput('last_name', e)  }/>
                <Form.Select required fluid disabled={disabled} error={langError} label='Taal' options={languages} placeholder='Taal' onFocus={e => this.clearFieldError('langError')} onChange={e => e.target.innerText === 'Frans' ? this.setState({ 'language_lead__c': 'fr' }) : this.setState({ 'language_lead__c': 'nl' })}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input fluid disabled={ disabled } label='E-mail' placeholder='E-mail' type="email" onChange= { e => this.handleInput('email', e) }/>
                <Form.Input required fluid disabled={disabled} label='GSM-Nummer' placeholder='GSM-Nummer' type="number" onChange= { e => this.handleInput('mobile', e) }/>
              </Form.Group>
              <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '10px' }}>
                <label style={{ fontWeight: 600 }}>Adres</label>
                <Autocomplete
                  className={cityError ? 'address-error' : ''}
                  style={{width: '90%'}}
                  onPlaceSelected={(place) => this.handleAddress(place)}
                  types={['address']}
                  componentRestrictions={{country: "be"}}
                />
              </div>
              <Form.Group style={{ display: 'flex', alignItems: 'center' }} >
                <Form.Input width={7} required disabled={ disabled } fluid label='Gewenst aantal uren (Per week)' placeholder='bv: 3' type='number' onChange= { e => this.handleInput('Gewenst_aantal_uren_per_week__c', e) }/>
                <Form.Field control={ Checkbox } disabled={ disabled } label='Strijk' onChange={ this.handleStrijkChange }/>
              </Form.Group>
              <Form.TextArea required disabled={ disabled } label='Bijkomende info' placeholder='bv: heeft u huisdieren?' onChange= { e => this.handleInput('Wensen__c', e) }/>
              <Form.Group inline required >
                <label>Hoevaak?</label>
                <Form.Radio
                  label='Wekelijks'
                  value='Wekelijks'
                  checked={ Frequentie__c === 'Wekelijks'}
                  onChange={this.handleRadioChange}
                  disabled={disabled}
                />
                <Form.Radio
                  label='Niet geweten'
                  value='Niet geweten'
                  checked={ Frequentie__c === 'Niet geweten'}
                  onChange={this.handleRadioChange}
                  disabled={ disabled }
                />
                <Form.Radio
                  label='Tweewekelijks'
                  value='Tweewekelijks'
                  checked={ Frequentie__c === 'Tweewekelijks'}
                  onChange={this.handleRadioChange}
                  disabled={disabled}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select fluid disabled={ disabled } label='Maandag' defaultValue="Niet mogelijk" options={availabilityKlant} placeholder='Niet mogelijk' onChange= { e => this.setState({ 'Maandagpicklist__c': e.target.innerText }) }/>
                <Form.Select fluid disabled={ disabled } label='Dinsdag' defaultValue="Niet mogelijk" options={availabilityKlant} placeholder='Niet mogelijk' onChange= { e => this.setState({ 'Dinsdagpicklist__c': e.target.innerText }) }/>
                <Form.Select fluid disabled={ disabled } label='Woensdag' defaultValue="Niet mogelijk" options={availabilityKlant} placeholder='Niet mogelijk' onChange= { e => this.setState({ Woensdagpicklist__c: e.target.innerText }) }/>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select fluid disabled={ disabled } label='Donderdag' defaultValue="Niet mogelijk" options={availabilityKlant} placeholder='Niet mogelijk' onChange= { e => this.setState({ 'Donderdagpicklist__c': e.target.innerText }) }/>
                <Form.Select fluid disabled={ disabled } label='Vrijdag' defaultValue="Niet mogelijk" options={availabilityKlant} placeholder='Niet mogelijk' onChange= { e => this.setState({ 'Vrijdagpicklist__c': e.target.innerText }) }/>
                <Form.Select fluid disabled={ disabled } label='Zaterdag' defaultValue="Niet mogelijk" options={availabilityKlant} placeholder='Niet mogelijk' onChange= { e => this.setState({ 'Zaterdagpicklist__c': e.target.innerText }) }/>
              </Form.Group>
              <Form.Select fluid disabled={ disabled } error={ originError } required label='Oorsprong' options={originKlant} placeholder='Telefoon' onFocus={ e => this.clearFieldError('originError') } onChange= { e => this.setState({ lead_source: e.target.innerText }) }/>
              {lead_source === 'Actie' && <Form.Group widths='equal'>
                <Form.Input required fluid disabled={ disabled } label='Name' placeholder='bv: Kerstmis' onChange={e => this.handleInput('NaamActie__c', e)} />
                <Form.Input required fluid disabled={ disabled } label='Detail' placeholder='bv: 24 December' onChange={e => this.handleInput('DetailActie__c', e)} />
              </Form.Group> }
              <Form.Button type="submit" name="submit" color='orange'>Bevestigen</Form.Button>
            </Form>
          </AnimationDiv>
        }
        {
          <NegativeMessage visible={ error } onClose={ closeError } >
            <span>Something went wrong :(</span>
            <p>Please contact Red Carrots team</p>
          </NegativeMessage>
        }
        {loading && <Loader />}
      </div>
    )
  }
}

export default withRouter(FormKlant)
