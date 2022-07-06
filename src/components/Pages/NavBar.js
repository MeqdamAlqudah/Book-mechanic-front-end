import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FiAlignJustify } from 'react-icons/fi';
import store from '../../redux/configureStore';
import style from './style.module.css';

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(true);
  const user = useSelector((el) => el.userReducer.current_user);
  const userRole = useSelector((el) => el.userReducer.user_role);
  const LOGOUT = 'LOGOUT';
  const signOutUrl = 'https://morning-retreat-71597.herokuapp.com/users/sign_out';
  const clickHandler = () => {
    axios.delete(signOutUrl);
    store.dispatch({
      type: LOGOUT,
    });
  };
  const clickHandlerMenu = () => {
    setShow(!show);
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
      <>
        <FiAlignJustify onClick={clickHandlerMenu} className={style.hide + style.hamburger} />

        <nav className={show ? 'sidenav ' : `sidenav ${style.hidden}`}>

          <div>
            <h2>Book a Mechanic</h2>
          </div>
          <Link to="/" className={style.block}>Home</Link>
          <Link to="/myappointmentpage" className={style.block}>My Appointments </Link>
          <Link to="/login" onClick={clickHandler} className={login ? style.block : style.hidden}>Log out</Link>

        </nav>
      </>
    );
  }

  return (
    <>
      <FiAlignJustify onClick={clickHandlerMenu} className={style.hide + style.hamburger} />

      <nav className={show ? 'sidenav ' : `sidenav ${style.hidden}`}>
        <div>
          <h2>Book a Mechanic</h2>
        </div>
        <Link to="/">Home</Link>
        <Link to="/MakeAppointment" className={style.block}>Make Appointment</Link>
        <Link to="/additem" className={style.block}>Add Car</Link>
        <Link to="/delete-car" className={style.block}>Delete Car</Link>
        <Link to="/login" onClick={clickHandler} className={login ? style.block : style.hidden}>Log out</Link>

      </nav>
    </>
  );
};

export default Navbar;
