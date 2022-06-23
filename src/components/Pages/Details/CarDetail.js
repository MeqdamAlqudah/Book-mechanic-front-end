import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AxiosWrapper from '../../../requirments/AxiosWrapper';
import style from './style.module.css';

const CarDetail = ({ userId }) => {
  const [currentCar, setCurrentCar] = useState({});
  const carId = useSelector((el) => el.carDetailReducer.currentCarId || JSON.parse(localStorage.getItem('carId')));

  useEffect(() => {
    localStorage.setItem('carId', JSON.stringify(carId));
    AxiosWrapper(`http://127.0.0.1:3000/api/v1/users/${userId}/cars/${carId}`).then((res) => {
      setCurrentCar(res.data);
    });
  }, [carId]);
  if (Object.keys(currentCar).length <= 0) {
    return (<div>loading...</div>);
  }
  return (
    <div className={style.page}>
      <div className={style.container}>
        <section className={style['image-section']}>
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
          <img src={currentCar.photo} className={style.image} alt="car" />
        </section>
      </div>

    </div>
  );
};
CarDetail.propTypes = {
  userId: PropTypes.number,
};
CarDetail.defaultProps = {
  userId: 0,
};

export default CarDetail;