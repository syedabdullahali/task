import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// For normal users
export const PrivateRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

// For admin only
export const AdminRoute = () => {
  const { user } = useAuth();
  console.log(user)
  return user && user.role === "admin" ? <Outlet /> : <Navigate to="/login" />;
};
