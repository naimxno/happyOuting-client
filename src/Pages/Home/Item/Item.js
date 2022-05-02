import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
  const { _id, name, price, image, quantity, supplier_name, description
  } = item;
  const navigate = useNavigate();
  const navigateToItemDetail = id => {
    navigate(`item/${id}`)
  }
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
          <button onClick={() => navigateToItemDetail(_id)}>manage</button>
        </div>
      </div>
    </div>
  );
};

export default Item;