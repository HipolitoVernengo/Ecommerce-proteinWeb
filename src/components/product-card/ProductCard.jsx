import { faBagShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductCard.css";
import { Link } from "react-router";

export default function ProductCard({prod}) {
    return (
        <div className="card">
            <div className="card-header">
                <img src={prod.image} alt={prod.name} />
                <div className="ver-mas">
                    <Link to = {`product-detail/${prod.id}`} >
                        Ver más <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{prod.name}</h2>
                <p className="category">{prod.category}</p>
                <div className="price-buy">
                    <p className="precio">${prod.price}</p>
                    <Link to= {`product-detail/${prod.id}`} className="buy">
                        Comprar <FontAwesomeIcon icon={faBagShopping} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
