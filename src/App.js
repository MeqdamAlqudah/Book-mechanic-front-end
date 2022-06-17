import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddItemForm from './components/Forms/AddItemForm';
import CarDetail from './components/Pages/CarDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/additem" element={<AddItemForm />} />
        <Route path="/cardetail" element={<CarDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
