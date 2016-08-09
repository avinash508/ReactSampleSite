import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-inverse App-Nav">
          <div className="container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">Brand</Link>
            </div>
            <div className="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar