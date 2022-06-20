import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import store from '../../redux/configureStore';
import style from './style.module.css';

const Navbar = ({ userRole, login }) => {
  const LOGOUT = 'LOGOUT';

  const clickHandler = () => {
    axios.delete('/users/sign_out');
    store.dispatch({
      type: LOGOUT,
    });
  };

  if (userRole !== 'admin') {
    return (
      <nav className="sidenav">
        <div>
          <h2>Book a Mechanic</h2>
        </div>
        <Link to="/" className={style.block}>Home</Link>
        <Link to="/MakeAppointment" className={style.block}>Make Appointment</Link>
        <Link to="/myappointmentpage" className={style.block}>My Appointments </Link>
        <Link to="/login" onClick={clickHandler} className={login ? style.block : style.hidden}>Log out</Link>
      </nav>
    );
  }

  return (
    <nav className="sidenav">
      <div>
        <h2>Book a Mechanic</h2>
      </div>
      <Link to="/">Home</Link>
      <Link to="/MakeAppointment" className={style.block}>Make Appointment</Link>
      <Link to="/myappointmentpage" className={style.block}>My Appointments </Link>
      <Link to="/additem" className={style.block}>Add Car</Link>
      <Link to="/delete-car" className={style.block}>Delete Car</Link>
      <Link to="/login" onClick={clickHandler} className={login ? style.block : style.hidden}>Log out</Link>

    </nav>
  );
};

Navbar.propTypes = {
  userRole: PropTypes.string,
  login: PropTypes.bool,
};
Navbar.defaultProps = {
  userRole: 'default',
  login: false,
};

export default Navbar;
