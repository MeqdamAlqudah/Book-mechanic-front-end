import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import store from '../../redux/configureStore';
import AxiosWrapper from '../../requirments/AxiosWrapper';

const HomePage = () => {
  const [carData, setCars] = useState({});
  const GET_CAR_DETAIL = 'GET_CAR_DETAIL';
  useEffect(() => {
    AxiosWrapper('http://127.0.0.1:3000/api/v1/cars').then((res) => {
      setCars(res.data);
    });
  }, []);
  const clickHandler = (data) => {
    store.dispatch({ type: GET_CAR_DETAIL, data: data.id });
  };
  if (Object.keys(carData).length <= 0) {
    return (<div className="main">loading...</div>);
  }
  return (
    <div className="main">
      <h1>Home page</h1>
      <div className="container">
        <div className="row ">
          {carData.slice(0, 3).map((car) => (
            <div className="col" key={uuidv4()}>
              <div className="card" style={{ width: 300 }}>
                <img src={car.photo} alt="car" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{car.model}</h5>
                  <p className="card-text">{car.registration}</p>
                  <Link to={`/cardetail?carId=${car.id}`} onClick={clickHandler(car)} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
