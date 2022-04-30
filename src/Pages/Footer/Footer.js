import React from 'react';
import './Footer.css'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='bg-dark text-white'>
      <p className='text-center p-4'>&#169; {year} HAPPYOUTING. ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;