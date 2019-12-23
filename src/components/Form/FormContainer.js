import React from 'react'
import { withRouter } from 'react-router-dom'

import './Form.scss'
import FormOptions from './Options/FormOptions'
import FormStrijk from './Options/Forms/FormStrijk'
import PositiveMessage from '../Layout/Message/PositiveMessage'
import webtolead from '../Api/webtolead'

class Form extends React.Component {
  state = {
    error: false,
    success: false,
    name: null
  }

  renderOptions = () => {
    const { user, history } = this.props
    const { error } = this.state
    console.log(user);
    if ( !user ) history.push('/login')
    else if (user.type === 'regular') {
      return <FormOptions
              onFormSubmit={ this.switchForm }
              error={ error }
              closeError={ this.closeError }/>
    } else if (user.type === 'strijk') {
      return <FormStrijk onFormSubmit={ this.switchForm } />
    }
  }

  closeError = () => {
    this.setState({
      error: false
    })
  }

  switchForm = ( obj, type ) => {
    if( type === 'lead') this.createLead(obj)
    if ( type === 'solicitant') this.createSolicitant(obj)
    if ( type === 'strijk') this.createStrijk(obj)
  }

  createLead = async (obj) => {
    const { user } = this.props
    this.setState({ name: `${obj.first_name} ${obj.last_name}` })
    obj.RegioId__c = user.regioID
    obj.KantoorId__c = user.sf_id
    obj.company = user.name

    const post = await webtolead.postLead(obj)
    if (post !== 200) this.setState({ error: post })
    else {
      setTimeout(() => this.setState({ success: true }), 300)
      setTimeout(() => this.setState({ success: false }), 5000)
    }
  }

  createSolicitant = async (obj) => {
    const { user } = this.props
    this.setState({ name: `${obj.first_name} ${obj.last_name}` })
    obj.KantoorId__c = user.sf_id
    obj.company = user.name
    obj.RegioId__c = user.regioID
    const post = await webtolead.postSolicitant(obj)
    if (post !== 200) this.setState({ error: post})
    else {
      setTimeout(() => this.setState({ success: true }), 1000)
      setTimeout(() => this.setState({ success: false }), 5000)
    }
  }

  createStrijk = async obj => {
    const { user } = this.props
    this.setState({ name: `${obj.first_name} ${obj.last_name}` })
    obj.company = user.name
    const post = await webtolead.postStrijk(obj)
    if (post !== 200) this.setState({ error: post})
    else {
      setTimeout(() => this.setState({ success: true }), 1000)
      setTimeout(() => this.setState({ success: false }), 5000)
    }
  }

  render() {
    return (
      <div className="form-container">
        { <PositiveMessage visible={ this.state.success }  >
            <span>{ this.state.name }</span>
            <p>Opgeslagen!</p>
          </PositiveMessage>
        }
        { this.renderOptions() }
      </div>
    )
  }
}

export default withRouter(Form)
