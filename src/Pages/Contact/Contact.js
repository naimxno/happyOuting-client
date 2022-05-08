import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <h2 className='text-center'>Contact Us</h2>
      <div>
        <h4>Your Name</h4>
        <input type="text" placeholder="Type Your Name" />
      </div>
      <div>
        <h4>Your Email</h4>
        <input type="email" placeholder="Type Your Email" />
      </div>
      <div>
        <h4>Write Massage</h4>
        <textarea placeholder="Write Massage" cols="30" rows="10"></textarea>
      </div>
      <button className="send">Send</button>
    </section>
  );
};

export default Contact;