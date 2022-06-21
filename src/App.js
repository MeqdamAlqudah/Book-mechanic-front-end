import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import NavBar from './components/Pages/NavBar';
import Signup from './pages/Signup';
import AddItemForm from './components/Forms/AddItemForm';
import CarDetail from './components/Pages/CarDetail';
import MyAppointmentDetail from './components/Pages/MyAppointmentDetail';

import HomePage from './components/Pages/HomePage';
import Appointmentform from './components/Forms/Appointmentform';

function App() {
  const [login, setLogin] = useState(false);

  const user = useSelector((el) => el.userReducer.current_user);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [user]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cardetail"
          element={(
            <>
              {login ? <CarDetail userId={user.id} /> : <Login />}
              {' '}

            </>
)}
        />
        <Route path="/additem" element={login ? <AddItemForm /> : <Login />} />
        <Route path="/appointment" element={login ? <Appointmentform /> : <Login />} />
        <Route path="/myappointmentpage" element={login ? <MyAppointmentDetail userid={user.id} /> : <Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
