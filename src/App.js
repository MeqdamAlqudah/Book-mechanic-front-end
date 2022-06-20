import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import NavBar from './components/Pages/NavBar';
import Signup from './pages/Signup';
import AddItemForm from './components/Forms/AddItemForm';
import CarDetail from './components/Pages/CarDetail';
import MyAppointmentDetail from './components/Pages/MyAppointmentDetail';

import HomePage from './components/Pages/HomePage';

function App() {
  const [carId, setCarId] = useState(0);
  const [login, setLogin] = useState(false);
  const user = useSelector((el) => el.userReducer);

  useEffect(() => {
    if (Object.keys(user.current_user).length !== 0) {
      setLogin(true)
    }
  }, [user])
  //* ** AFTER CREATING THE MAIN PAGE THIS CLICK Handler will help us to get
  //  card id from the main page
  const clickHandler = (data) => {
    setCarId(data.carid);
  };
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cardetail" element={<>
          {login ? <CarDetail clickHandler={clickHandler} userid={user ? user.id : 1} carid={carId === 0 ? 1 : carId} /> : <Login/>} </>} />
        <Route path="/additem" element={login ? <AddItemForm /> : <Login />} />
        <Route path="/myappointmentpage" element={login ? <MyAppointmentDetail userid={1} /> : <Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
