import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
  const quantityRef = useRef();
  const { itemsId } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/item/${itemsId}`
    fetch(url)
      .then(res => res.json())
      .then(data => setItem(data))
  }, []);


  const qunatityHandle = () => {
    const quantity = quantityRef.current.value;
    console.log(quantity);
  }


  return (
    <div>
      <h1 className='text-center mt-5'>NEW PRODUCTS</h1>
      <div className='w-50 mx-auto mt-5'>
        <div className="input-group mb-3">
          <input ref={quantityRef} type="number" className="form-control" placeholder="Add Items" min={1} />
          <div className="input-group-append">
            <button onClick={qunatityHandle} className="btn btn-outline-secondary" type="button">Add Items</button>
          </div>
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
            <button className='btn btn-primary w-100 font-weight-bold'>Delivered</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;