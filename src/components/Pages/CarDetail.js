import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AxiosWrapper from '../../requirments/AxiosWrapper';

const CarDetail = ({ carId, userid }) => {
  const [currentCar, setCurrentCar] = useState({});

  useEffect(() => {
    AxiosWrapper(`http://127.0.0.1:3000/api/v1/users/${userid}/cars/${carId}`).then((res) => {
      setCurrentCar(res.data);
    });
  }, []);
  if (Object.keys(currentCar).length <= 0) {
    return (<div>loading...</div>);
  }
  return (
    <div>
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

    </div>
  );
};

CarDetail.propTypes = {
  carId: PropTypes.number,
  userid: PropTypes.number,
};
CarDetail.defaultProps = {
  carId: 5,
  userid: 1,
};
export default CarDetail;
