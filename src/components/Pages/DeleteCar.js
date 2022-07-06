import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import store from '../../redux/configureStore';
import AxiosWrapper from '../../requirments/AxiosWrapper';
import Login from '../../pages/Login';

const DeleteCar = () => {
  const [carData, setCars] = useState({});
  const userLogin = useSelector((el) => el.userReducer.current_user);

  const DELETE_CAR_MIDDLEWARE = 'DELETE_CAR_MIDDLEWARE';
  useEffect(() => {
    if (Object.keys(userLogin).length !== 0) {
      AxiosWrapper(`https://morning-retreat-71597.herokuapp.com/api/v1/users/${userLogin[0].id}/cars`).then((res) => {
        setCars(res.data);
      });
    }
  }, [userLogin]);
  const clickHandler = (data) => {
    store.dispatch(
      {
        type: DELETE_CAR_MIDDLEWARE,
        data: { car_id: data.id, user_id: userLogin[0].id },
      },
    );
    setCars(carData.filter((el) => el.id !== data.id));
  };
  if (Object.keys(userLogin).length === 0) {
    return (
      <>
        <Login />
      </>
    );
  } if (Object.keys(carData).length <= 0) {
    return (<div className="main">loading...</div>);
  }
  if (Object.keys(carData)[0] === 'status') {
    return (<div style={{ color: 'red' }}>Please add some cars to see them here</div>);
  }

  return (
    <div className="main">
      <h1>Delete car page</h1>
      <div className="container">
        <div className="row ">
          {carData.slice(0, 3).map((car) => (
            <div className="col" key={uuidv4()}>
              <div className="card" style={{ width: 300 }}>
                <img src={car.photo} alt="car" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{car.model}</h5>
                  <p className="card-text">{car.registration}</p>
                  <Link to={`/delete-car?carId=${car.id}`} onClick={() => clickHandler(car)} className="btn btn-primary">
                    DELETE CAR
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
export default DeleteCar;
