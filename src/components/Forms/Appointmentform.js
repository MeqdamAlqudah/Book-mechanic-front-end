import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';

const Appointmentform = ({ props }) => {
    const [city, setCity] = useState();
    const [date, setDate] = useState();
    const [openSelect, setOpenSelect] = useState(false);
        
//     // const [car_id, setCar_id] = useState(props.currentCarId || '');
//     const [result, setResult] = useState({
//     response: null,
//     data: null,
//   });

//   const navigate = useNavigate();

  const bookAppointment = async (e) => {
    e.preventDefault();
  }

//     let status = null;

//     const appoint = {
//       city, 
//       date, 
//       car_id, 
//     //   user_id: props.currentUser.id,
//     };

//     await fetch(`http://localhost:3000/api/v1/appointments`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ appoint }),
//     })
//       .then((resp) => {
//         status = resp.ok;
//         if (status) {
//           navigate('/');
//         }
//         return resp.json();
//       })
//       .then((data) => {
//         setResult({
//           response: status,
//           data,
//         });
//         toast.success('Appointment created successfully!');
//         return data;
//       });
//   };

//   const selectCar = (id) => {
//     setCar_id(id);
//     setOpenSelect(false);
//   };

  return (
      <>
    {/* {result.data && (
        <div>
          {result.data && Object.entries(result.data).map((error) => (
            <p key={error[0]}>
              {capitalize(error[0])}
              {' '}
              {error[1]}
            </p>
          ))}
        </div>
      )} */}
      <form className={style.form} onSubmit={(e) => bookAppointment(e)}>
        <input
          className={style['form-child']}
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <div className={style.select}>
          {openSelect && (
            <div className={style['select-options']}>
              {props.car.map(({ id, name }) => (
                <span
                  key={id}
                  value={id}
                  role="presentation"
                  onClick={() => selectCar(id)}
                >
                  {name}
                </span>
              ))}
            </div>
          )}
          {/* <p role="presentation" onClick={() => setOpenSelect(!openSelect)}>
            {car_id ? props.car.find((b) => b.id === car_id).name : 'Select a car'}
          </p> */}
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