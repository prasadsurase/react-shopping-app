import React from 'react';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './register.scss';

class Register extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if(password === confirmPassword) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, {displayName});

        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch(error) {
        console.error(error);
      }
    } else {
      alert('password does not match confirm password');
      return;
    }
    this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const {displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit} >
          <FormInput label='Display Name' handleChange={this.handleChange} name='displayName' type='text' value={displayName} required />
          <FormInput label='Email' handleChange={this.handleChange} name='email' type='email' value={email} required />
          <FormInput label='Password' handleChange={this.handleChange} name='password' type='password' value={password} required />
          <FormInput label='Confirm Password' handleChange={this.handleChange} name='confirmPassword' type='password' value={confirmPassword} required />
          <div className='buttons'>
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
