import axios from 'axios';
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======
>>>>>>> 3fba065c532bbd8eba243d5a14610e3563205e36
import { v4 as uuidv4 } from 'uuid';
import style from './style.module.css';
import store from '../../redux/configureStore';

const Appointmentform = () => {
  const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [cars, setCars] = useState([]);
<<<<<<< HEAD

  const [carId, setCarId] = useState(1);
=======
>>>>>>> 3fba065c532bbd8eba243d5a14610e3563205e36

  const user = useSelector((el) => el.userReducer.current_user);
   
  const appoint = {
    city,
    date,
<<<<<<< HEAD
    car_id: carId,
    user_id: user[0].id,
    description: 'Road rager, sleek and smooth',
  };

  const getCars = () => {
    fetch(`http://127.0.0.1:3000/api/v1/users/${user[0].id}/cars`)
=======
    car_id: 4,
    user_id: 1,
    description: 'Road rager, sleek and smooth',
  };

  const userId = 1;
  const getCars = () => {
    fetch(`http://127.0.0.1:3000/api/v1/users/${userId}/cars`)
>>>>>>> 3fba065c532bbd8eba243d5a14610e3563205e36
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
<<<<<<< HEAD

  const clickHandler = (e) => {
    setCarId(e);
  };
=======
>>>>>>> 3fba065c532bbd8eba243d5a14610e3563205e36

  useEffect(() => {
    getCars();
  }, []);

  return (
<<<<<<< HEAD
      <>
      <form className={style.form} onSubmit={(e) => bookAppointment(e)}>
=======
    <>
      <form className={style.form} onSubmit={bookAppointment}>
>>>>>>> 3fba065c532bbd8eba243d5a14610e3563205e36
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

<<<<<<< HEAD
              <option onClick={() => clickHandler(car.id)} key={uuidv4()}>{car.brand}</option>
=======
              <option key={uuidv4()}>{car.brand}</option>
>>>>>>> 3fba065c532bbd8eba243d5a14610e3563205e36
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
