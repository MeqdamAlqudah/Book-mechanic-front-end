import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
// import store from '../../redux/configureStore';
// // import { useSelector } from 'react-redux';
// import axios from 'axios';

const Signup = () => {
    const [ name, setName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfrimPassword ] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword,
            address: 'Nigeria',
            phone: 123,
            profession: 'Developer'
             
        }
        console.log(data)

        try {
            let res = await fetch('http://localhost:3000/api/v1/users', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json', }
            });

            // let resJson = await res.json();
            // console.log(resJson)
            
            if (res.status === 200) {
                setName('')
                setUsername('')
                setEmail('')
                setPassword('')
                setConfrimPassword('')
            } else {
                return "some error occured"
            }
        } catch (err) {
            console.log(err);
        }
    };


  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <form className={style.card} onSubmit={handleSubmit} >
          <div>Signup</div>

          <label htmlFor="name">
            Name
            <input type="name" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
          </label>

          <label htmlFor="username">
            Username
            <input type="text" id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
          </label>

          <label htmlFor="email">
            Email
            <input type="email" id="eamil" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label htmlFor="password">
            Password
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          </label>

          <label htmlFor="confirmPassword">
            Confirm Password
            <input type="password" id="password" placeholder="Confirm Password" onChange={(e) => setConfrimPassword(e.target.value)} required />
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



//   const USER_SIGNUP = 'USER_SIGNUP'
// //   const user = useSelector((el) => el.userReducer);
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     axios({
//         method: 'post',
//         url: 'http://localhost:3000/api/v1/users',
//         data: {
//           name: e.target[0].value,
//           username: e.target[1].value,
//           email: e.target[2].value,
//           password: e.target[3].value,
//           confirmPassword: e.target[4].value 
//         },
//         headers: {
//           'Content-Type': 'application/json',
  
//         },
//       }).then((res) => store.dispatch(
//         { type: USER_SIGNUP, newUser: res.data },
//       )).catch((error) => {
//         console.log(error);
//       });
