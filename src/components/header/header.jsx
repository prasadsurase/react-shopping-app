import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = (props) => {
  const { currentUser } = props;
  
  return (
    <div className='header'>
      <Link to='/' className='logo-container' >
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <Link to='/shops' className='option'>SHOP</Link>
        <Link to='/contact' className='option'>CONTACT</Link>
        { 
          currentUser ? 
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          : <Link to="/signin">SIGN IN</Link>
        }
      </div>
    </div>
  )
};

export default Header;