import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'
import Autocomplete from 'react-google-autocomplete';
import { connect } from 'react-redux'

import '../../Form.scss'
import NegativeMessage from '../../../Layout/Message/NegativeMessage'
import Loader from '../../../Layout/Loader/Loader'
import GreatSuccess from '../../../Layout/Gifs/Giphy'
import { saveFormStrijken } from '../../../../actions/saveForm'


class FormStrijk extends Component {
  state = {
    messageVisible: false,
    disabled: false,
    loadingInput: false,
    cityError: false,
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

  handleAddress = async (place) => {
    if (place.formatted_address) {
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
    } else this.setState({ cityError: true })
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
      }, 8000)
  }

  render() {
    const { messageVisible, loading, disabled, cityError } = this.state
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
            <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '10px' }}>
              <label style={{ fontWeight: 600 }}>Google search adres</label>
              <Autocomplete
                className={cityError ? 'address-error' : ''}
                style={{width: '90%'}}
                onPlaceSelected={(place) => this.handleAddress(place)}
                types={['address']}
                componentRestrictions={{country: "be"}}
              />
            </div>
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
export default connect(null, {saveFormStrijken})(FormStrijk)