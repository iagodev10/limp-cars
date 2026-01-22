import React from "react";
import "./App.css";

import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import Servicos from "./Pages/Servicos";
import Agendar from "./Pages/Agendar";
import Confirm from "./Pages/Confirm";
import Admin from "./Pages/Admin";
import AdminLogin from "./Pages/AdminLogin";

import PublicLayout from "./components/PublicLayout";

const isAdminAuthenticated = () => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("adminAutenticado") === "true";
};

const RequireAdmin = ({ children }) => {
  const location = useLocation();

  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/confirmar" element={<Confirm />} />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <RequireAdmin>
            <Admin />
          </RequireAdmin>
        }
      />
    </Routes>
  );
}

export default App;
