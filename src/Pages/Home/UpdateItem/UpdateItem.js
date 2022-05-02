import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
  const { itemsId } = useParams();
  return (
    <div>
      <h1>update : {itemsId}</h1>
    </div>
  );
};

export default UpdateItem;