import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';

const Items = () => {
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  const navigateToManageItems = () => {
    navigate('/manageItems')
  }

  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then(data => setItems(data.slice(0, 6)))
  }, [])
  return (
    <div>
      <h1 className='text-center mt-5 '>NEW PRODUCTS</h1>
      <div className='wrapper'>
        {
          items.map(item => <Item
            key={item._id}
            item={item}
          ></Item>)
        }
      </div>
      <div className='w-50 mx-auto'>
        <button className='btn btn-outline-dark w-100 mx-auto p-2 mt-3' onClick={() => navigateToManageItems()}>Manage Items</button>
      </div>
    </div>
  );
};

export default Items;