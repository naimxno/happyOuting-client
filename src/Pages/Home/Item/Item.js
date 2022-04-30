import React from 'react';
import './Item.css'

const Item = ({ item }) => {
  const { _id, name, price, image, quantity, supplier_name, description
  } = item;
  return (
    <div>
      <h1>NEW PRODUCTS</h1>
      <div className='item-container'>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          <p>Price:{price}</p>
          <p>Quantity : {quantity}</p>

        </div>
      </div>
    </div>
  );
};

export default Item;