import { Route, Routes } from "react-router";
import "./App.css";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import AdminProducts from "./pages/admin/products/AdminProducts";
import AdminUsers from "./pages/admin/users/AdminUsers";
import ProductDetail from "./pages/product-detail/ProductDetail";
import Layout from "./layout/Layout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"



export default function App() {

  return (
    <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element = {<Register />} />
      
        <Route element ={<Layout/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element = {<Contact />} />
            <Route path="/about" element= {<About />} />
            <Route path="/products" element= {<Products />} />
            <Route path="/admin/products" element = {<AdminProducts />} />
            <Route path="/admin/users" element = {<AdminUsers />} />
            <Route path="/product-detail/:id" element = {<ProductDetail />} />

            <Route path="*" element= {<h1>NOT FOUND 404</h1>} />
          </Route>

        </Routes>
    </>
  )
}
