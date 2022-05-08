import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = `http://localhost:5000/items`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })
  }
  return (
    <form className='w-50 mx-auto m-5 d-flex flex-column p-3 rounded border border-dark' onSubmit={handleSubmit(onSubmit)}>
      <h2 className='text-center'>Add Your Items</h2>
      <input className='m-2 p-2' placeholder='Your Name'{...register("supplier_name", { required: true, maxLength: 20 })} />

      <input className='m-2 p-2' placeholder='product Name'{...register("product_name", { required: true, maxLength: 20 })} />

      <input className='m-2 p-2' placeholder='Gmail'{...register("email", { required: true, maxLength: 20 })} />


      <input className='m-2 p-2' placeholder='Price' type="number" {...register("price")} />

      <input className='m-2 p-2' placeholder='Quantity' type="number" {...register("quantity")} />

      <input className='m-2 p-2' placeholder='Picture URL' type="Picture URL" {...register("image")} />

      <textarea className='m-2 p-2' placeholder='Type something about your products...' {...register("description")} />

      <input className='m-2 p-2 font-weight-bold bg-info rounded border-0' type="submit" value='Add Item' />
    </form>
  );
};

export default AddItems;