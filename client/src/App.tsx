import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetailPage from './pages/Product/Product Detail/ProductDetail';
import Layout from './Layout/Layout';
import Order from './pages/Order';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
          <Route index element={<Home/>}/>
          <Route path='/product-detail' element={<ProductDetailPage/>}/>
          <Route path='/order_tracking' element={<Order/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
