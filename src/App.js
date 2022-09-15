import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
    <div className="w-full bg-white">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>} />
        
      </Routes>
    </div>
    </ShoppingCartProvider>
  );
}

export default App;
