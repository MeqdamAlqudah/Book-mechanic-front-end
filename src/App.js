import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/Pages/NavBar';
import Signup from './pages/Signup';
import AddItemForm from './components/Forms/AddItemForm';
import CarDetail from './components/Pages/CarDetail';
import HomePage from './components/Pages/HomePage';

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
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/additem" element={<AddItemForm />} />
        <Route path="/cardetail" element={<CarDetail clickHandler={clickHandler} userid={user ? user.id : 4} carid={carId} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
