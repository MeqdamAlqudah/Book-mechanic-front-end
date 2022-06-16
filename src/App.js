import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddItemForm from './components/Forms/AddItemForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/additem" element={<AddItemForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
