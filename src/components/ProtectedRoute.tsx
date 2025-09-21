import { Navigate } from "react-router-dom";
import { ReactElement } from "react";

interface ProtectedRouteProps {
  children: ReactElement;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  return loggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
