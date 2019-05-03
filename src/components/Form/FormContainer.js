import React from 'react'
import FormOptions from './Options/FormOptions'
import { withRouter } from 'react-router-dom'
import webtolead from '../Api/webtolead'
import './Form.scss'

class Form extends React.Component {
  state = {
    error: false
  }

  renderOptions = () => {
    const { user, history } = this.props
    const { error } = this.state
    if ( !user ) {
      history.push('/login')
    } else {
      return (<FormOptions onFormSubmit={ this.switchForm } error={ error } closeError= { this.closeError }/>)
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
  }

  createLead = async (obj) => {
    const { user } = this.props
    obj.RegioId__c = user.regioID
    obj.KantoorId__c = user.sf_id
    obj.company = user.name
    const post = await webtolead.postLead(obj)
    if (post !== 200) this.setState({ error: post })  
  }

  createSolicitant = async (obj) => {
    const { user } = this.props
    obj.KantoorId__c = user.sf_id
    obj.company = user.name
    obj.RegioId__c = user.regioID
    const post = await webtolead.postSolicitant(obj)
    if (post !== 200) this.setState({ error: post})
  }

  render() {
    return (
      <div className="form">
        { this.renderOptions() }
      </div>
    )
  }
}

export default withRouter(Form)