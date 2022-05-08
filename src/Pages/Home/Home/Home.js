import React from 'react';
import Brand from '../../Brand/Brand';
import BuyerReview from '../../BuyerReview/BuyerReview';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Items></Items>
      <Brand></Brand>
      <BuyerReview></BuyerReview>
    </div>
  );
};

export default Home;