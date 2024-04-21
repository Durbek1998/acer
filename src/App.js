import React from "react";
import { Routes, Route } from "react-router-dom";
import Layaut from "./components/Layaut/Layaut";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import PRoductDetails from "./pages/PRoductDetails";
import Cart from "./pages/Cart";
import Checkout from './pages/Checkout';
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import "./App.css";
import ProjectedRoute from "./routers/ProjectedRoute";
import Dashbord from "./admin/Dashboard";
import AllProducts from "./admin/AllProducts";
import AddProducts from "./admin/AddProducts";
import Users from "./admin/Users"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layaut />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<PRoductDetails />} />
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/checkout" element={<ProjectedRoute>
          <Checkout />
        </ProjectedRoute>} /> */}
        <Route path="/*" element={<ProjectedRoute/>}>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="dashboard" element={<Dashbord/>}/>
          <Route path="dashboard/all-products" element={<AllProducts/>}/>
          <Route path="dashboard/add-products" element={<AddProducts/>}/>
          <Route path="dashboard/users" element={<Users/>}/>
          
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Route>
    </Routes>
  );
}
export default App;
