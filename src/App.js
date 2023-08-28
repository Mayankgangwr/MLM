import "./styles.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} exact />
        <Route path="/inventory" element={<Home />} exact />
        <Route path="/team" element={<Home />} exact />
        <Route path="/orders" element={<Home />} exact />
        <Route path="/income" element={<Home />} exact />
        <Route path="/profile" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}
