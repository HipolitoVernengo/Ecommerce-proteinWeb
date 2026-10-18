import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Features from "./pages/features/features";
import Products from "./pages/products/Products";
import AdminProducts from "./pages/admin/products/AdminProducts";



export default function App() {

  return (
    <>

      <Header />
      <main className="main">

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element = {<Contact />} />
          <Route path="/about" element= {<About />} />
          <Route path="/features" element = {<Features />} />
          <Route path="/products" element= {<Products />} />
          <Route path="/admin/products" element = {<AdminProducts />} />
        </Routes>
      </main>
      
      <Footer />
    </>
  )
}
