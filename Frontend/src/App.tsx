import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from "react";
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute, AdminRoute } from './components/PrivateRoute';
import Loader from './components/ui/Loader';
import NotFound from './pages/errors/NotFound';

// Layouts
const ClientLayout = lazy(() => import('./Layout/ClientLayout'));
const SuperAdminLayout = lazy(() => import('./Layout/SuperAdminLayout'));
const Order = lazy(() => import('./pages/Order'));


// Client Pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const SignUp = lazy(() => import('./pages/Login/SignUp'));
const Cart = lazy(() => import('./pages/Cart'));
const ProductDetailPage = lazy(() => import('./pages/Product/Product Detail/ProductDetail'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const Payment = lazy(() => import('./pages/Payment'));
const OrderCompletePage = lazy(() => import('./pages/Order/OrderCompletePage'));

// Admin Pages
const ProductManagement = lazy(() => import('./pages/management/ProductManagement'));
const ProductManagementForm = lazy(() => import('./pages/management/ProductManagement/ProductManagementForm'));
const CategoryManagement = lazy(() => import('./pages/management/CategoryManagement'));
const OrderManagement = lazy(() => import('./pages/management/OrderManagement'));
const UserManagement = lazy(() => import('./pages/management/UserManagement'));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader/>}>
          <Routes>

            {/* Public Routes */}
            <Route path='/' element={<ClientLayout />}>
              <Route index element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='product-detail/:id' element={<ProductDetailPage />} />
              <Route path='product-shop/:categoryId' element={<Shop />} />
            </Route>

            {/* Protected User Routes */}
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<ClientLayout />}>
                <Route path='cart' element={<Cart />} />
                <Route path='payment/:id' element={<Payment />} />
                <Route path='order/:id/complete' element={<OrderCompletePage />} />
                <Route path='order_tracking' element={<Order/>}/>
              </Route>
            </Route>

            {/* Admin Routes */}
            <Route element={<AdminRoute />}>
              <Route path='/admin' element={<SuperAdminLayout />}>
                <Route index element={<UserManagement />} />
                <Route path='product_management' element={<ProductManagement />} />
                <Route path='product_management_form' element={<ProductManagementForm />} />
                <Route path='category_management' element={<CategoryManagement />} />
                <Route path='order_management' element={<OrderManagement />} />
              </Route>
            </Route>

                   <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
