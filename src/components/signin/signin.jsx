import React from 'react';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';

import './signin.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', password: ''
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput label='Email' handleChange={this.handleChange} name='email' type='email' value={email} required />
          <FormInput label='Password' handleChange={this.handleChange} name='password' type='password' value={password} required />
          <div className='buttons'>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  };
}

export default SignIn;