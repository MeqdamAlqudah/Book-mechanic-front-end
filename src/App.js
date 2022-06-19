import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AddItemForm from './components/Forms/AddItemForm';
import CarDetail from './components/Pages/CarDetail';
import MyAppointmentDetail from './components/Pages/MyAppointmentDetail';

function App() {
  const [carId, setCarId] = useState(0);
  const user = useSelector((el) => el.userReducer.find(((user) => user === 'currentUser')));
  //* ** AFTER CREATING THE MAIN PAGE THIS CLICK Handler will help us to get
  //  card id from the main page
  const clickHandler = (data) => {
    setCarId(data.carid);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/additem" element={<AddItemForm />} />
        <Route path="/cardetail" element={<CarDetail clickHandler={clickHandler} userid={user ? user.id : 1} carid={carId} />} />
        <Route path="/myappointmentpage" element={<MyAppointmentDetail userid={1} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
