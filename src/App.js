import React, { useEffect } from "react"
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
import { AuthProvider } from "./context/UserContext";
import Logout from "./pages/Logout"

// const Logout = () =>{
//   const dispatch = useAuthDispatch()
//   useEffect(()=>{
// logout(dispatch)
//   },[])
//   return(<></>)
// }
function App() {
  return (
    <Router>
      <div className="body-content">
        <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Products />} />
            <Route path="login" element={<Login />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
