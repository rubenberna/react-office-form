import React from 'react';
import {
  Button,
  Container
} from 'semantic-ui-react';
import FormKlant from './Forms/FormOptionsKlant';
import FormSolicitant from './Forms/FormOptionsSolicitant'
import Tumbleweed from '../../Layout/Tumbleweed/Tumbleweed'
import Placeholder from '../../Layout/Placeholder/Placeholder'

class FormOptions extends React.Component {
  state = {
    klantBtn: false,
    solicitantBtn: false
  }

  handleClick = e => {
    const buttons = this.state
    let choice = e.target.value;    
    let other;
    let change = {};

    Object.keys(buttons).forEach(key => {
      if (key !== choice) other = key;
    })

    change[choice] = buttons[choice] === false ? true : false;
    change[other] = false     
    
    this.setState({
      ...change
    })
  }

  closeForm = (name) => {
    let change = {}
    change[name] = false
    this.setState({
      ...change
    })
  }

  switchForm() {
    const { onFormSubmit, error, closeError } = this.props
    const { klantBtn, solicitantBtn } = this.state
    if (klantBtn) return (<FormKlant onFormSubmit={ onFormSubmit } closeForm={ this.closeForm} error={ error } closeError={ closeError } />)
    else if (solicitantBtn) return (<FormSolicitant onFormSubmit={onFormSubmit} closeForm={this.closeForm} error={error} closeError={ closeError }/>)
    else return (<Placeholder />)
  }

  render() {
    const { klantBtn, solicitantBtn } = this.state
    return (
      <Container>
        <div className="form-options">
          <div className="form-options-buttons">
            <h3 style={{ textAlign: 'center' }}>Selecteer uw form</h3>
            <div>
              <Button 
                toggle active={klantBtn} 
                value='klantBtn'
                onClick={ e => this.handleClick(e)} >
                Klant
              </Button>
              <Button 
                toggle active={solicitantBtn} 
                value='solicitantBtn'
                onClick={ e => this.handleClick(e)} >
                Solicitant
              </Button>
            </div>
          </div>
          <div className="form-options-selected">
            { this.switchForm ()}
          </div>
        </div>
      </Container>
    )
  }
}

export default FormOptions