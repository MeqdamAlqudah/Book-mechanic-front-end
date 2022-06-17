import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddItemForm from './components/Forms/AddItemForm';
import CarDetail from './components/Pages/CarDetail';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((el) => el.userReducer.find(((user) => user === "currentUser")));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/additem" element={<AddItemForm />} />
        <Route path="/cardetail/" element={<CarDetail user_id={user.id} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
