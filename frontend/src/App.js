import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/shop';
import ShopCategory from './Pages/shopcategory';
import SignUp from './Pages/signup';
import Cart from './Pages/cart';
import Footer from './Components/footer/footer'

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
        
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
