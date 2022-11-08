/*eslint-disable*/
import "./App.css";
import { useState, useTransition } from "react";
import { Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom";
import Home from "./page/home";
import AboutPage from "./page/aboutpage";
import Button from "./Components/Button";
import Layout from "./layout/Layout";
import Header from "./layout/header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutpage" element={<AboutPage />} />
    </div>
  );
};

export default App;
