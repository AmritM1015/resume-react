import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="head">
        <div className="head_c1">
          <div>
            <h1>{this.props.personInfo.name}</h1>
            <p className="large-text">{this.props.personInfo.occupation}</p>
          </div>
        </div>
        <div className="head_c2">
          <div>
          <p>Email: <a className="link" href={`mailto:${this.props.contactInfo.email}`}>{this.props.contactInfo.email}</a></p>
            <p>Web: {this.props.contactInfo.web}</p>
            <p>Mobile: {this.props.contactInfo.mobile}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;