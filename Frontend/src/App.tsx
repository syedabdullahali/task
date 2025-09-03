import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetailPage from './pages/Product/Product Detail/ProductDetail';
import Order from './pages/Order';
import Shop from './pages/Shop/Shop';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Cart from './pages/Cart';
import ClientLayout from './Layout/ClientLayout';
import SuperAdminLayout from './Layout/SuperAdminLayout';
import ProductManagement from './pages/management/ProductManagement';
import CategoryManagement from './pages/management/CategoryManagement';
import OrderManagement from './pages/management/OrderManagement';
import UserManagement from './pages/management/UserManagement';
import Payment from './pages/Payment';
import OrderCompletePage from './pages/Order/OrderCompletePage';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<ClientLayout/>} >
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path='Cart' element={<Cart/>}/>
          <Route path='product-detail/:id' element={<ProductDetailPage/>}/>
          <Route path='order_tracking' element={<Order/>}/>
          <Route path='product-shop/:categoryId' element={<Shop/>}/>
          <Route path="/order/:id/complete" element={<OrderCompletePage />} />
           <Route path='/payment/:id' element={<Payment/>}/>
          </Route>

          <Route  path='/admin' element={<SuperAdminLayout/>} >
                <Route index element={<UserManagement/>}/>
                <Route path='product_management'   element={<ProductManagement/>}/>
                <Route path='category_management'  element={<CategoryManagement/>}/>
                <Route path='order_management'  element={<OrderManagement/>}/>
          </Route>  

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
