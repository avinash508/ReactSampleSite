import React from 'react';
import { Link } from 'react-router';

function renderProductItem(item) {
  const url = `/products/${item.id}`;
  return (
    <div key={item.id} className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={item.images.small} alt={item.name} />
        </a>
      </div>
      <div className="media-body">
        <div className="row">
          <div className="col-xs-10">
            <h4 className="media-heading">
              <Link to={url}>{item.name}</Link>
            </h4>
            <h5><strong>{item.price}</strong></h5>
            <p>{item.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


function ProductListItems(props) {
  return (
    <div className="Product-List-Items">
      <h3>Products here</h3>
      <div className="Product-List-Items-Container">
        {props.items.map(renderProductItem)}
      </div>
    </div>
  );
}

export default ProductListItems;