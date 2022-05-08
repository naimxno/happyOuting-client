import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const SingUp = () => {
  const emailRef = useRef('');
  const nameRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigateLogIn = () => {
    navigate('/login');
  }
  if (user) {
    navigate('/')
  }

  const handelSubmit = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  }

  return (
    <div>
      <h1>sing up</h1>
      <Form onSubmit={handelSubmit} className='m-5 w-75 mx-auto'>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className='w-100' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>all ready log in <Link to='/login' onClick={navigateLogIn} className='pe-auto text-danger text-decoration-none'>LOG IN</Link> </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SingUp;