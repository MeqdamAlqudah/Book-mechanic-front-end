import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useSelector } from 'react-redux';
import store from '../../redux/configureStore';
import style from './style.module.css';

const Navbar = ({ userRole }) => {
  const [login, setLogin] = useState(false);

  const user = useSelector((el) => el.userReducer.current_user);

  const LOGOUT = 'LOGOUT';
  const signOutUrl = 'http://localhost:3000/users/sign_out';
  const clickHandler = () => {
    axios.delete(signOutUrl);
    store.dispatch({
      type: LOGOUT,
    });
  };
  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [user]);
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
};
Navbar.defaultProps = {
  userRole: 'default',
};

export default Navbar;
