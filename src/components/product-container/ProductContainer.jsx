import { useEffect, useState } from "react"
import ProductCard from "../product-card/ProductCard";
import { getProducts } from "../../services/ProductServices";
import "./ProductContainer.css";

export default function ProductContainer() {
    //cargar productos
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        obtenerProductos();
    }, []);

    async function obtenerProductos() {
        //Llamo a la funcion creada para obtener productos
        const products = await getProducts();

        setProducts(products);
    }

  return (
    <div className="products">
        {products.map((prod) => <ProductCard key={prod.id} prod = {prod}/>
        )}
    </div>
  )
}
