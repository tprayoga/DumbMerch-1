import React from "react";
import Navbar from "./Navbar/Navbar";
import Categori from "../Pages/Categori";
import Categoriedit from "../Pages/Categoriedit";
import Complainuser from "../Pages/Complainuser";
import Detailproduct from "../Pages/Detailproduct";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import Productedit from "../Pages/Productedit";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdinChat from "../Pages/AdinChat";
import AddCategory from "../Pages/AddCategory";
import AddProduct from "../Pages/AddProduct";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-product" element={<Productedit />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail-product/:id" element={<Detailproduct />} />
        <Route path="/user-complain" element={<Complainuser />} />
        <Route path="/admin-complain" element={<AdinChat />} />
        <Route path="/edit-category/" element={<Categoriedit />} />
        <Route path="/add-category/" element={<AddCategory />} />
        <Route path="/add-product/" element={<AddProduct />} />

        <Route path="/category" element={<Categori />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
