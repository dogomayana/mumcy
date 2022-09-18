import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Home from './Home';
import {CartProvider} from 'react-use-cart'
import './index.css'

function App() {
  return (
    <div className="w-full">
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='cart' element={<Cart/>} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
