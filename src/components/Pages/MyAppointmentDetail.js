import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AxiosWrapper from '../../requirments/AxiosWrapper';

const MyAppointmentDetail = ({ userid }) => {
  const [currentAppointments, setCurrentAppointments] = useState({});

  useEffect(() => {
    AxiosWrapper(`http://127.0.0.1:3000/api/v1/users/${userid}/appointment`).then((res) => {
      setCurrentAppointments(res.data);
    });
  }, []);
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
  userid: PropTypes.number,
};
MyAppointmentDetail.defaultProps = {
  userid: 0,
};
export default MyAppointmentDetail;
