import { useParams } from "react-router";
import "./ProductDetail.css";
import { useEffect, useState } from "react";
import { getProductsById } from "../../services/ProductServices";
import Swal from "sweetalert2";

export default function ProductDetail() {
    
    const [product,setProduct] = useState();

    //Hook de react Router
    const params = useParams(); // {id = "valor"}

    const id = params.id;

    useEffect(() =>{
        getProductById();
    }, []);

    async function getProductById() {
        try{
            const product = await getProductsById(id);

            setProduct(product);
            
        }catch(error){
            Swal.fire({
                title: "Error",
                text: "Error al obtener el producto",
                icon: "error"
            })
        }
    }

    return (
        <div className="product-detail">
            <div className="product-img">
                <img src = {product?.image} alt={product?.name} />
            </div>
            <div className="product-info">
                <h3 className="name-product">{product?.name}</h3>
                <p className="price">$ {product?.price}</p>
                <p className="product-feature">
                    {product?.description}
                </p>
                <div className="cantidad-agregar">
                    <div className="cantidad">
                        <input type="number" />
                    </div>
                    <div className="agregar">
                        <a href="" className="btn background">
                            Agregar al carrito
                        </a>
                    </div>
                </div>
                <div className="promos">
                    <h5>Promociones</h5>
                    <ul className="promo-list">
                        <li className="promo-item">-5% pagando en efectivo en tiendas</li>
                        <li className="promo-item">-5% pagando con transferencia</li>
                        <li className="promo-item">
                            Crédito o débito en 3 cuotas sin intereses
                        </li>
                        <li className="promo-item">Dinero disponible en Mercado Pago</li>
                        <li className="promo-item">Código QR en nuestras tiendas</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
