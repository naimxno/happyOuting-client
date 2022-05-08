import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Items></Items>
      <Contact></Contact>
    </div>
  );
};

export default Home;