import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <div className="heading">
          <span>Contact</span> Manager
        </div>
        <div className="nav_button">
          <button>
            <Link to="/add">
              <i className="fa fa-plus"></i> Add
            </Link>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navigation;
