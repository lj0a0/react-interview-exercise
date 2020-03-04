import React, { Component } from "react";

class AlertMessage extends Component {
  render() {
    console.log("AlertMessage- Component");
    const { error } = this.props;

    if (error.code == "1") {
      return (
        <div className="alert alert-success" role="alert" id="alert_success">
          {error.message}
        </div>
      );
    } else if (error.code == "2") {
      return (
        <div className="alert alert-danger" role="alert" id="alert_danger">
          {error.message}
        </div>
      );
    } else if (error.code == "3") {
      return (
        <div className="alert alert-warning" role="alert" id="alert_warning">
          {error.message}
        </div>
      );
    } else if (error.code == "4") {
      return (
        <div className="alert alert-info" role="alert" id="alert_info">
          {error.message}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AlertMessage;
