import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
  const { itemsId } = useParams();
  const [item, setItem] = useState({});


  useEffect(() => {
    const url = `http://localhost:5000/item/${itemsId}`
    fetch(url)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [item]);


  const addQuantity = event => {
    event.preventDefault();
    let quantity = parseInt(event.target.quantity.value);
    quantity += item.quantity;
    const updateQuantity = { quantity }
    const url = `http://localhost:5000/item/${itemsId}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateQuantity)
    })
      .then(res => res.json())
      .then(data => {
        alert('Quantity added successfully!!!');
        event.target.reset();
      })
  }

  const deliveredItem = () => {
    const lessQuantity = item.quantity - 1
    const updateQuantity = { lessQuantity }
    console.log(updateQuantity);
    const url = `http://localhost:5000/item/${itemsId}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateQuantity)
    })
      .then(res => res.json())
      .then(data => {
        alert('Quantity added successfully!!!');
      })
  }

  return (
    <div>
      <h1 className='text-center mt-5'>NEW PRODUCTS</h1>
      <div className='w-50 mx-auto mt-5'>
        <div className="input-group mb-3">
          <form onSubmit={addQuantity} className='d-flex mx-auto'>
            <input className="form-control" type="number" name='quantity' placeholder='Update Quantity' />
            <input type="submit" value="Update Quantity" />
          </form>
        </div>
      </div>
      <div>
        <div className='item-container mx-auto my-5'>
          <div>
            <img src={item.image} alt="" />
          </div>
          <div>
            <h3 className='m-0'>{item.product_name}</h3>
            <p className='m-0'><small>{item.description}</small></p>
            <p><small>Supplier : {item.supplier_name}</small></p>
            <p className='m-0'>Price : {item.price}$</p>
            <p className='mb-1'>Quantity : {item.quantity}</p>
            <button className='btn btn-primary w-100 font-weight-bold' onClick={deliveredItem}>Delivered</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;