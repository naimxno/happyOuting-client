import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
  const { _id, product_name, price, image, quantity, supplier_name, description
  } = item;
  const navigate = useNavigate();
  const navigateToItemDetail = id => {
    navigate(`item/${id}`)
  }

  return (
    <div>
      <div className='item-container products-container my-3'>
        <img src={image} alt="" />
        <div>
          <h3 className='m-0'>{product_name}</h3>
          <p className='m-0'><small>{description}</small></p>
          <p className='m-0'><small>Supplier : {supplier_name}</small></p>
          <p className='m-0'><strong>Price : ${price}</strong></p>
          <p className='mb-1'><strong>Quantity : {quantity}</strong></p>
          <button className='border w-100 px-5 py-2 rounded bg-dark text-white ' onClick={() => navigateToItemDetail(_id)}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Item;