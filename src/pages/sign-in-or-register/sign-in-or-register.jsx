import React from 'react';
import Register from '../../components/register/register';
import SignIn from '../../components/signin/signin';

import './sign-in-or-register.scss';

const SignInOrRegisterPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <Register />
    </div>
  );
};

export default SignInOrRegisterPage;
