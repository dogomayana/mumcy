import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Home from './Home';
import {CartProvider} from 'react-use-cart'
import './index.css'
import WhatsappCon from './components/WhatsappCon';
import Footer from './components/Footer';
import PrivacyCookies from './pages/PrivacyCookies';

function App() {
  return (
    <div className="w-full relative">
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='privacy' element={<PrivacyCookies/>} />
      </Routes>
      <WhatsappCon/>
      <Footer/>
      </CartProvider>
    </div>
  );
}

export default App;
