import "./styles.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Home from "./pages/home";
import Inventory from "./pages/Inventory";
import Teams from "./pages/Teams";
import Orders from "./pages/Orders";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} exact />
        <Route path="/inventory" element={<Inventory />} exact />
        <Route path="/team" element={<Teams />} exact />
        <Route path="/orders" element={<Orders />} exact />
        <Route path="/income" element={<Home />} exact />
        <Route path="/profile" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}
