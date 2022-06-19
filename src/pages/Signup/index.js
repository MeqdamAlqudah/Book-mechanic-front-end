import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './style.module.css';
import store from '../../redux/configureStore';

const Signup = () => {
  const USER_SIGNUP = 'USER_SIGNUP';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfrimPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      password_confirmation: confirmPassword,
      address: 'Nigeria',
      phone: 123,
      profession: 'Developer',
      photo: 'photo',

    };

    axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => store.dispatch({ type: USER_SIGNUP, newUser: response.data }));

    setName('');
    setEmail('');
    setPassword('');
    setConfrimPassword('');
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <form className={style.card} onSubmit={handleSubmit}>
          <div>Signup</div>

          <label htmlFor="name">
            Name
            <input type="name" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label htmlFor="email">
            Email
            <input type="email" id="eamil" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label htmlFor="password">
            Password
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>

          <label htmlFor="confirmPassword">
            Confirm Password
            <input type="password" id="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfrimPassword(e.target.value)} required />
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
