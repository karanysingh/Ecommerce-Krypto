import React from "react"
import { Header } from "./Components/Header"
import Home from "./pages/Home"
import "./Components/css/app.css"
import Login from "./pages/Login"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetails"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="body-content">

        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Products />} />
            <Route path="login" element={<Login />} />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
