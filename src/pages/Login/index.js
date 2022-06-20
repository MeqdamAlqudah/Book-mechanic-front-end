import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module';
import store from '../../redux/configureStore';
import axios from 'axios';


const Login = () => {
    const USER_LOGIN = 'USER_LOGIN';
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }

        axios({
            method: "POST",
            url: "http://localhost:3000/users/sign_in",
            data: data,
            headers: {
                'Content-Type': 'application/json',
              },
        }).then((response) => store.dispatch({ type: USER_LOGIN, newUser: response.data }));

        setEmail('');
        setPassword('');
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
                    Don't have an account?
                    {' '}
                    <Link to="/signup">Sign Up</Link>
                </small>

            </div>

        </div>
    )
};

export default Login;