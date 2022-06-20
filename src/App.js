import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/Pages/NavBar';
import Signup from './pages/Signup';
import AddItemForm from './components/Forms/AddItemForm';
import CarDetail from './components/Pages/CarDetail';
import MyAppointmentDetail from './components/Pages/MyAppointmentDetail';

import HomePage from './components/Pages/HomePage';

function App() {
  const user = useSelector((el) => el.userReducer.find(((user) => user === 'currentUser')));
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/additem" element={<AddItemForm />} />
        <Route path="/cardetail" element={<CarDetail userid={user ? user.id : 4} />} />
        <Route path="/myappointmentpage" element={<MyAppointmentDetail userid={1} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
