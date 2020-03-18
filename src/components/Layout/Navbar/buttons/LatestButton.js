import React from "react";
import "../Navbar.scss";
import { withRouter } from "react-router-dom";

class LatestButton extends React.Component {
  showDetailForm = async () => {
    const path = this.props.history.location.pathname === '/' ? '/details' : '/'
    this.props.history.push(path);
  };
  render() {
    const btnText = this.props.history.location.pathname === '/' ? 'Ingevulde formolieren' : 'Home'
    return (
      <button
        className={"ui blue button logout-btn "}
        onClick={this.showDetailForm}
      >
        <i className="icon send" />
        {btnText}
      </button>
    );
  }
}

export default withRouter(LatestButton);