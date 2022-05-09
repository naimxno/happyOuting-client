import React, { useEffect, useState } from 'react';


const MyItems = () => {
  const [items, setItems] = useState([]);
  // const [myItems, setMyItems]=useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])

  // items.filter(item => it)

  return (
    <div className='w-50 mx-auto m-5'>
      <ul className="list-group">
        <li className="list-group-item active text-center">My items</li>
        {
          items.map(item =>
            <li key={item._id} className="list-group-item">{item.product_name}</li>
          )}
      </ul>
    </div>
  );
};

export default MyItems;