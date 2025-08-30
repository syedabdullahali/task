import React from 'react';
import "./index.css";   
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
// import ProductManagement from './Pages/ProductManagement';
import SuperAdminLayout from './Layout/SuperAdminLayout';
import Dashbord from './Pages/Dashbord/Dashbord';
import ProductManagement from './Pages/ProductManagement';

function App() {
  return (
  <BrowserRouter>
        <Routes>
           <Route index path='/' element={<Login/>}/>
           <Route  path='/admin' element={<SuperAdminLayout/>} >
                <Route index  element={<Dashbord/>}/>
                <Route path='product_management'  element={<ProductManagement/>}/>
           </Route>  
        </Routes>
    </BrowserRouter>
  );
}

export default App;
