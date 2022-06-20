import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AxiosWrapper from '../../requirments/AxiosWrapper';
import Login from '../../pages/Login';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const [carData, setCars] = useState({});
  const userLogin = useSelector((el) =>  console.log(el))

  useEffect(() => {
    if (Object.keys(userLogin).length !== 0) {
      console.log(userLogin)
      AxiosWrapper(`http://127.0.0.1:3000/api/v1/users/${userLogin[0].id}/cars`).then((res) => {
      setCars(res.data);
  });
  }
    
  }, []);

  if (Object.keys(userLogin).length === 0) {
    return(<>
      <p>Please log in</p>
      <Login />
    </>)
  }else if (Object.keys(carData).length <= 0) {
    console.log(carData)
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
