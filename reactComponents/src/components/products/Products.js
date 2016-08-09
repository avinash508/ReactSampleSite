import React, { Component } from 'react';

class Products extends Component {
  render() {
    return (
      <div className="Product-Container">
        {this.props.children}
      </div>
    );
  }
}

export default Products;