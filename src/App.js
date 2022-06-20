import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import AddItemForm from './components/Forms/AddItemForm';
import CarDetail from './components/Pages/CarDetail';

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
        <Route path="/login" element={<Login />} />
        <Route path="/additem" element={<AddItemForm />} />
        <Route path="/cardetail" element={<CarDetail clickHandler={clickHandler} userid={user ? user.id : 1} carid={carId === 0 ? 2 : carId} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
