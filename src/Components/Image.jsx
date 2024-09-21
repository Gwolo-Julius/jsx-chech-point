import React from 'react'
import product from './product'

const Image = () => {
  return (
    <div>
      <img src={product.imageUrl} alt="" />
    </div>
  );
}

export default Image
