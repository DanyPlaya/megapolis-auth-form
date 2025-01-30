import Cookies from "js-cookie";
import { ReactNode, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface AuthWrapperProps {
  children: ReactNode;
}

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const rememberMe = localStorage.getItem("remember_me") === "true";
      const authCookie = Cookies.get("auth") === "true";
      return rememberMe || authCookie;
    };

    const authStatus = checkAuth();
    setIsAuthenticated(authStatus);

    if (!authStatus) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  if (isAuthenticated === null) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
