import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar narvbar-dark dg-dark">
        <div>
          <h1 className="text-white">{this.props.title}</h1>
        </div>
      </nav>
    );
  }
}

export default Navigation;
