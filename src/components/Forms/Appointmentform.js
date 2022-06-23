import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import style from './style.module.css';
import store from '../../redux/configureStore';

const Appointmentform = () => {
  const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [cars, setCars] = useState([]);

  const [carId, setCarId] = useState(1);

  const user = useSelector((el) => el.userReducer.current_user);
   
  const appoint = {
    city,
    date,
    car_id: carId,
    user_id: user[0].id,
    description: 'Road rager, sleek and smooth',
  };

  const getCars = () => {
    fetch(`http://127.0.0.1:3000/api/v1/users/${user[0].id}/cars`)
      .then((response) => response.json())
      .then((data) => setCars(data));
  };

  const bookAppointment = async (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: `http://localhost:3000/api/v1/users/${user[0].id}/appointment`,
      appoint,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(
      (response) => store.dispatch({ type: CREATE_APPOINTMENT, newAppointment: response.data }),
    );
  };

  const clickHandler = (e) => {
    setCarId(e);
  };

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
        <div>
          <select className={style['form-child']}>
            <option>--Select Car--</option>
            {cars.map((car) => (

              <option onClick={() => clickHandler(car.id)} key={uuidv4()}>{car.brand}</option>
            ))}
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
  );
};

export default Appointmentform;