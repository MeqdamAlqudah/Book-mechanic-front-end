import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import style from './style.module';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };
    console.log(data);
    axios({
      method: 'post',
      url: 'http://localhost:3000/users/sign_in',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => console.log(response));

    // axios.delete('/users/sign_out');
  };
  return (
    <div className="main">
      <div>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">
            Email
            <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>

          <button type="submit">Log In</button>
        </form>

        <small>
          Don&apos;t have an account?
          {' '}
          <Link to="/signup">Sign Up</Link>
        </small>

      </div>

    </div>
  );
};

export default Login;
