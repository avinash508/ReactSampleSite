import React from 'react';

function ProductListSidebar(props) {
  return (
    <div className="Product-List-Sidebar">
      <h3>Show results for</h3>
      <div className="Product-List-Section">
        <h5><strong>Office Products</strong></h5>
        <ul className="nav nav-list">
          <li><a href="#">Rollerball Pens</a></li>
          <li><a href="#">Pens &amp; Refills</a></li>
          <li><a href="#">Fountain Pens</a></li>
          <li><a href="#">Ink Pen Refills</a></li>
        </ul>
      </div>
      <div className="Product-List-Section">
        <h5><strong>Office Products</strong></h5>
        <ul className="nav nav-list">
          <li><a href="#">Rollerball Pens</a></li>
          <li><a href="#">Pens &amp; Refills</a></li>
          <li><a href="#">Fountain Pens</a></li>
          <li><a href="#">Ink Pen Refills</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ProductListSidebar;