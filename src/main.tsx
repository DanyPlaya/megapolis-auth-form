import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthWrapper } from "./components/auth/auth-wrapper/ui/auth-wrapper";
import "./index.css";
import { AuthPage } from "./pages/auth-page";
import { MainPage } from "./pages/main-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/"
          element={
            <AuthWrapper>
              <MainPage />
            </AuthWrapper>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
