import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import AxiosWrapper from '../../requirments/AxiosWrapper';

const CarDetail = ({ carId }) => {
  const [currentCar, setCurrentCar] = useState({});

  useEffect(() => {
    AxiosWrapper(`http://127.0.0.1:3000/api/v1/cars/${carId}`).then((res) => {
      setCurrentCar(res.data);
    });
  }, []);
  if (Object.keys(currentCar).length <= 0) {
    return (<div>loading...</div>);
  }
  return (
    <div className="main">
      <h1>Detail page</h1>
      Brand:
      {' '}
      {currentCar.brand}
      <br />
      {' '}
      Model:
      {' '}
      {currentCar.model}
      <br />
      Registration:
      {' '}
      {currentCar.registration}
      <br />
      Photo:
      {' '}
      <img src={currentCar.photo} alt="car" />
      <h2>Appointments:</h2>
      {' '}
      <ul>
        {currentCar.appointments.map((element) => (

          <li key={uuidv4()}>
            Description:
            {' '}
            {element.description}
            <br />
            Date:
            {' '}
            {element.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

CarDetail.propTypes = {
  carId: PropTypes.number,
};
CarDetail.defaultProps = {
  carId: 3,
};
export default CarDetail;
