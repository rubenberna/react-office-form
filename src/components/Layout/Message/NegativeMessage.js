import React from 'react'
import { Message } from 'semantic-ui-react'
import './Message.scss'

class Notification extends React.Component {
  renderIfVisible() {
    if(this.props.visible) { 
      return (
        <Message negative attached='top' onDismiss={this.props.onClose}>
          <Message.Header>{this.props.children[0]}</Message.Header>
          { this.props.children[1] }
        </Message>
      )
    }
  }

  render() {
    return (
      <div>
        { this.renderIfVisible() }
      </div>
    )
  }
}

export default Notification