import React from 'react'
import FormOptions from './Options/FormOptions'
import { withRouter } from 'react-router-dom'
import * as apiLead from '../Api/leads'
import * as apiSolicitant from '../Api/solicitant'
import './Form.scss'

class Form extends React.Component {
  state = {}

  renderOptions = () => {
    const { user } = this.props
    const { history } = this.props
    if ( !user ) {
      history.push('/login')
    } else {
      return (<FormOptions onFormSubmit={ this.switchForm }/>)
    }
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
    apiLead.postLead(obj)
  }

  createSolicitant = async (obj) => {
    const { user } = this.props
    obj.KantoorId__c = user.sf_id
    obj.company = user.name
    obj.RegioId__c = user.regioID
    apiSolicitant.postSolicitant(obj)
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