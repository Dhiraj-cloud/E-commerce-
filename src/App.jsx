// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Privateroutes from "./Routes/Privateroutes";
import Profile from "./pages/Profile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Register/>}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Privateroutes><Dashboard/></Privateroutes>}/>
      <Route path="/products" element={<Privateroutes><Products/></Privateroutes>}/>
      <Route path="/cart" element={<Privateroutes><Cart/></Privateroutes>}/>
      <Route path="/profile" element={<Privateroutes><Profile/></Privateroutes>}/>

    </Routes>
  );
}
export default App;
