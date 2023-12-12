import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home';
import Wishlist from './Pages/Wishlist';
import Basket from './Pages/Basket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/basket' element={<Basket/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
