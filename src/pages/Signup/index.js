import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

const Signup = () => {

    const [ error, setError ] = useState('')

    const handleSubmit = (e) => {
        setError('')
        e.preventdefault();
    }

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <form className={style.card} onClick={handleSubmit}>
          <div>Signup</div>
          
          <p role="alert" className={style.error}>{error}</p>

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

export default Signup