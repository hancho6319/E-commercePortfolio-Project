import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/shop';
import ShopCategory from './Pages/shopcategory';
import Login from './Pages/login';
import Cart from './Pages/cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/males' element={<ShopCategory/>} category='males'/>
        <Route path='/females' element={<ShopCategory/>} category='females'/>
        <Route path='/accessories' element={<ShopCategory/>} category='accessories'/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
