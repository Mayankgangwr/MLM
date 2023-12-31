import "./styles.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Home from "./pages/home";
import Inventory from "./pages/Inventory";
import Teams from "./pages/Teams";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";
import ImageUpload from "./ImageUpload";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import AddProductForm from "./pages/Addproducts";
import CartUI from "./ui/cartui";
import ProDetails from "./pages/pro_details";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/team" element={<Teams />} exact />
          <Route path="/orders" element={<Orders />} exact />
          <Route path="/cart" element={<CartUI />} exact />
          <Route path="/income" element={<Home />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/addpro" element={<AddProductForm />} exact />
        </Route>
        <Route path="/fileupload" element={<ImageUpload />} exact />
        <Route index element={<Home />} exact />
        <Route path="/inventory" element={<Inventory />} exact />
        <Route path="pro_detail" element={<ProDetails />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/cartui" element={<CartUI />} />
      </Routes>
    </BrowserRouter>
  );
}
