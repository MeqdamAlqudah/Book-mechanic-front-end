import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import store from '../../redux/configureStore';
// import { useSelector } from 'react-redux';
import axios from 'axios';

const Signup = () => {
  const USER_SIGNUP = 'USER_SIGNUP'
//   const user = useSelector((el) => el.userReducer);
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios({
        method: 'post',
        url: 'http://localhost:3000/api/v1/users',
        data: {
          name: e.target[0].value,
          username: e.target[1].value,
          email: e.target[2].value,
          password: e.target[3].value,
          confirmPassword: e.target[4].value 
        },
        headers: {
          'Content-Type': 'application/json',
  
        },
      }).then((res) => store.dispatch(
        { type: USER_SIGNUP, newUser: res.data },
      )).catch((error) => {
        console.log(error);
      });
  
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <form className={style.card} onSubmit={handleSubmit} >
          <div>Signup</div>

          <label htmlFor="name">
            Name
            <input type="name" id="name" placeholder="Name" required />
          </label>

          <label htmlFor="username">
            Username
            <input type="text" id="username" placeholder="Username" required />
          </label>

          <label htmlFor="email">
            Email
            <input type="email" id="eamil" placeholder="Email" required />
          </label>

          <label htmlFor="password">
            Password
            <input type="password" placeholder="Password" required />
          </label>

          <label htmlFor="confirmPassword">
            Confirm Password
            <input type="password" id="password" placeholder="Confirm Password" required />
          </label>

          <button type="submit" className={style.btn}>Sign Up</button>
        </form>

        <small>
          Already have an account?
          {' '}
          <Link to="/login">Sign In</Link>
        </small>
      </div>
    </div>
  );
};

export default Signup;
