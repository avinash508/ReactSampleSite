import React, { Component } from 'react';
import ProductLoader from './ProductLoader';
import Api from '../../api';
import './ProductItem.css';

class ProductItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false
    }
  }
  componentWillMount() {
    const id = parseInt(this.props.params.id, 10);
    const self = this;
    self.setState({
      loading: true
    });
    Api.fetchProductByid(id).then(res => {
      self.setState({
        loading: false,
        item: res
      });
    });
  }

  renderItem(item) {
    return (
      <div className="Product-Item-Single">
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <div className="Product-Image">
              <img src={item.images.large} alt={item.name}/>
            </div>
          </div>
          <div className="col-md-8 col-lg-8">
            <div className="Product-Description">
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
              <p>{item.description}</p>
              <a href="#" className="btn btn-success">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {loading, item} = this.state;
    return (
      <div className="Product-Item">
        <div className="container">
          {loading ? <ProductLoader /> : this.renderItem(item)}
        </div>
      </div>
    );
  }
}

export default ProductItem;