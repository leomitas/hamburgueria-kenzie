import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

const RoutesComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default RoutesComponents;
