import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AxiosWrapper from '../../requirments/AxiosWrapper';
import Appointmentform from '../Forms/Appointmentform';
import style from './style.module.css';

const MyAppointmentDetail = () => {
  const [submited, setSubmited] = useState(false);
  const [currentAppointments, setCurrentAppointments] = useState({});
  const user = useSelector((el) => el.userReducer.current_user);
  useEffect(() => {
    AxiosWrapper(`https://morning-retreat-71597.herokuapp.com/api/v1/users/${user[0].id}/appointment`).then((res) => {
      setCurrentAppointments(res.data);
      setSubmited(true);
    });
  }, [user]);
  if (Object.keys(currentAppointments).length === 0 && !submited) {
    return (<div className={style.myappointmentError}>loading...</div>);
  } if (submited) {
    return (<h1 className={style.myappointmentError}>you need to make some appointments</h1>);
  }
  return (
    <div>
      {' '}
      <h2>Appointments:</h2>
      {' '}
      <ul>
        {currentAppointments.map((element) => (

          <li key={uuidv4()}>
            Description:
            {' '}
            {element.description}
            <br />
            Date:
            {' '}
            {element.date}
            <br />
          </li>
        ))}
      </ul>

      <Appointmentform />
    </div>
  );
};

export default MyAppointmentDetail;
