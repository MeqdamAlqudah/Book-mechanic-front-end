import axios from 'axios';
import React, { useState, useEffect } from 'react';
import style from './style.module.css';

const Appointmentform = () => {

    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [ cars, setCars] = useState([]);
      
  //   const [car_id, setCar_id] = useState(props.currentCarId || '');
  //   const [result, setResult] = useState({
  //   response: null,
  //   data: null,
  // });

  const appoint = {
    city,
    date,
    car_id: 4,
    user_id: 1,
  }

  const getCars = () => {
    const userId = 1
     fetch(`http://127.0.0.1:3000/api/v1/users/${userId}/cars`) 
     .then(response=>response.json())
     .then(data => setCars(data))

    }

  const bookAppointment = async (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/appointment',
      appoint,
      headers: {
        'Content-Type': 'application/json', 
      },
    }).then((response) => console.log(response.appoint) )
  }

useEffect(() => {
  getCars();
}, []);

  return (
      <>
      <form className={style.form} onSubmit={(e) => bookAppointment(e)}>
        <input
          className={style['form-child']}
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <div className={style['form-child']}>
          <select>
            <option>--Select Car--</option>
            <option>Benz</option>
            <option>Bentley</option>
            <option>Bugatti</option>
          </select>
        </div>
        <input
          className={style['form-child']}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          placeholder="Select date"
        />
        <button
          className={style.btn}
          type="submit"
        >
          Book Now
        </button>
      </form>
    </>
  )
};

export default Appointmentform;