import React from 'react';
import {
  Button,
  Container,
  Transition
} from 'semantic-ui-react';
import FormKlant from './Forms/FormOptionsKlant';
import FormSolicitant from './Forms/FormOptionsSolicitant'

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
    const { onFormSubmit } = this.props
    const { klantBtn, solicitantBtn, animation, duration } = this.state
    if (klantBtn) return (
      <Transition.Group animation={animation} >
        <FormKlant onFormSubmit={ onFormSubmit } closeForm={ this.closeForm} />
      </Transition.Group>
      )
    else if (solicitantBtn) return ( <FormSolicitant onFormSubmit={ onFormSubmit } closeForm={ this.closeForm} />)
    else return
  }

  render() {
    const { klantBtn, solicitantBtn } = this.state
    return (
      <Container>
        <div className="form-options">
          <div className="form-options-buttons">
            <h3>Please pick your form</h3>
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