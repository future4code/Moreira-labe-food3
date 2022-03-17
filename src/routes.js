import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Address from "./pages/Address";
import Cart from "./pages/Cart";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Signup from "./pages/SignUp";
import EditarEndereco from "./pages/EditarEndereco";
import EditarPerfil from "./pages/EditarPerfil";
import Menu from "./pages/RestauranteMenu";
import HistoricoDePedidos from "./pages/Historico/HistoricoPedidos";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/address" element={<Address />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/editar" element={<EditarPerfil />} />
        <Route path="/editarEndereco" element={<EditarEndereco />} />
        <Route path="/historico" element={<HistoricoDePedidos />} />
        <Route path="/menu/:id" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
