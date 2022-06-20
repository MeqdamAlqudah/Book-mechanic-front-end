import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AxiosWrapper from '../../requirments/AxiosWrapper';

const HomePage = () => {
  const [carData, setCars] = useState({});

  useEffect(() => {
    AxiosWrapper('http://127.0.0.1:3000/api/v1/cars').then((res) => {
      setCars(res.data);
    });
  }, []);
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
                  <a href={`/cardetail?carId=${car.id}`} className="btn btn-primary">
                    View Details
                  </a>
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
