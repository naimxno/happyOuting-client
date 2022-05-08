import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('')
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  let from = location.stat?.pathname || '/';

  const handelSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  if (user) {
    navigate(from, { replace: true });
  }
  const navigateSingUp = () => {
    navigate('/singUp')
  }
  return (
    <div>
      <h1 className='text-center pt-5'>log in</h1>
      <Form onSubmit={handelSubmit} className='m-5 w-75 mx-auto'>
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
      <p>if you not sing up <Link to='/singUp' onClick={navigateSingUp} className='pe-auto text-danger text-decoration-none'>SING UP</Link> </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;