import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import AxiosWrapper from '../../requirments/AxiosWrapper';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const MyAppointmentDetail = ({userid}) => {
  const [currentAppointments, setCurrentAppointments] = useState({});
  const user = useSelector((el) => el.userReducer.current_user);
  useEffect(() => {

    AxiosWrapper(`http://127.0.0.1:3000/api/v1/users/${userid}/appointment`).then((res) => {
      setCurrentAppointments(res.data);
    });
  }, [user]);
  if (Object.keys(currentAppointments).length <= 0) {
    return (<div>loading...</div>);
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
    </div>
  );
};
MyAppointmentDetail.propTypes = {
  userId: PropTypes.number,
};
MyAppointmentDetail.defaultProps = {
  userId: 0,
};
export default MyAppointmentDetail;
