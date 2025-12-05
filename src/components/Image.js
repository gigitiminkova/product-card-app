import React from 'react';
import product from '../product';

function Image() {
  return (
    <img 
      src={product.image} 
      alt={product.name}
      className="product-image"
      style={{ width: '100%', height: '300px', objectFit: 'cover' }}
    />
  );
}

export default Image;