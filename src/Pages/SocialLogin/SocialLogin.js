import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from "../../images/Google-Icon-PNG_rwscww.png"

const SocialLogin = () => {
  const [singInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = <div>
      <p className='text-danger'>Error: {error?.message}</p>
    </div>
  }
  if (user) {
    navigate('/')
  }
  return (
    <div>
      <div className='d-flex w-50 mx-auto align-items-center'>
        <div style={{ height: "2px" }} className='bg-primary w-50'></div>
        <p className='mt-2 p-2'>Or</p>
        <div style={{ height: "2px" }} className='bg-primary w-50'>
        </div>
      </div>
      {errorElement}
      <div className='d-flex w-50 mx-auto justify-content-center my-2'>
        <button onClick={() => singInWithGoogle()} className='border border-secondary btn btn-white px-5 m-2 '> <img src={google} alt="" /> Google</button>
      </div>
    </div>
  );
};

export default SocialLogin;