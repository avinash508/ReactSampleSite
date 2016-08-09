import React, { Component } from 'react';
import ProductLoader from './ProductLoader';
import ProductListSidebar from './ProductListSidebar';
import ProductListItems from './ProductListItems';
import Api from '../../api';
import './ProductList.css';

class ProductsList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
      items: []
    };
  }

  // Simulate an ajax request here
  componentDidMount() {
    let self = this;
    self.setState({
      loading: true
    });

    Api.fetchProducts().then(items => {
      self.setState({
        loading: false,
        items: items
      });
    });
  }

  render() {
    const {loading, items} = this.state;
    return (
      <div className="Product-List">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <ProductListSidebar />
            </div>
            <div className="col-md-10 col-lg-10">
              {loading ? <ProductLoader /> : <ProductListItems items={items} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsList
