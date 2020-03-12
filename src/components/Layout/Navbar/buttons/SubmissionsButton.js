import React from "react";
import "../Navbar.scss";
import { withRouter } from "react-router-dom";

class SubmissionsButton extends React.Component {
  showDetailForm = async () => {
    this.props.history.push("/datail");
  };
  render() {
    return (
      <button
        className={"ui blue button logout-btn "}
        onClick={this.showDetailForm}
      >
        
        <i className="icon send" />
        verzonden gegevens
      </button>
    );
  }
}

export default withRouter(SubmissionsButton);
