import React from 'react';
import product from '../product';

function Price() {
  return <h3 className="product-price text-success fw-bold">{product.price}</h3>;
}

export default Price;