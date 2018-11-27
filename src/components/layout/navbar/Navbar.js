import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from '../links/SignedInLinks';
import SignedOutLinks from '../links/SignedOutLinks';
import { connect } from 'react-redux';
import logo from '../../../svg/logo.svg';
import './Navbar.css';

const Navbar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper blue accent-2">
      <div className="container">
        <img src={logo} className="navbar-logo" alt="logo" />
        <Link to="/" className="brand-logo right">
          CleanUp Planet
        </Link>
        {links}
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Navbar);
