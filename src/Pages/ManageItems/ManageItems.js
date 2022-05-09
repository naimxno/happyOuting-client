import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageItems = () => {
  const [items, setItems] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])

  const handleDelete = id => {
    const confirm = window.confirm('Are you sure?')
    if (confirm) {
      const url = `http://localhost:5000/item/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(result => {
          const restItem = items.filter(item => item._id !== id);
          setItems(restItem)
        }, [])
    }
  }

  // const navigateToItemDetail = id => {
  //   navigate(`item/${id}`)
  // }

  return (
    <div className='px-3'>
      <h1 className='text-center my-3'>Manage Items</h1>

      <table style={{ fontSize: "14px" }} className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">product</th>
            <th scope="col"><small>Supplier</small></th>
            <th scope="col">Quantity</th>
            <th scope="col">Change</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map((item) => {
              return (
                <tr key={item._id}>
                  <th scope="row">{item.product_name}</th>
                  <td>{item.supplier_name}</td>
                  <td>{item.quantity}</td>
                  <td>
                    {/* <button className='border px-3 py-1 m-1 rounded bg-dark text-white' onClick={() => navigateToItemDetail(item._id)}>Update</button> */}

                    <button onClick={() => handleDelete(item._id)} className='border px-3 py-1 m-1 rounded bg-dark text-white'>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  );
};

export default ManageItems;