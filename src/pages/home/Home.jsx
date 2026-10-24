import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.css";
import { faCreditCard, faLock, faTruck } from "@fortawesome/free-solid-svg-icons";
import ProductContainer from "../../components/product-container/ProductContainer";
import { Link } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function Home() {

const { hash } = useLocation();

useEffect(() => {
  if (hash) {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }
}, [hash]);

    return (
        <main className="main-container">
            <section className="banner mt-4">
                <img src="./src/assets/images/leo_nutreko_elements_s1_h1.webp" alt="banner" />
                <div className="banner-sentence-container">
                    <p className="banner-sentence">
                        <span>ELEVATE </span>
                    </p>
                    <p className="banner-sentence text-white">YOUR GAINS</p>
                    <div className=" button-banner">
                        <Link to = "/products" className="btn background">
                            Ver productos
                        </Link>
                    </div>
                </div>
            </section>
            <h2 className="title-sections m-4 text-center">Tu tienda de confianza</h2>
            <section className="hero" id="about">
                <div className="introduction">
                    <h2 className="title-hero">
                        Maximiza tus resultados con Protein <span>Web</span>
                    </h2>
                    <div className="texto">
                        <p>
                            Somos especialistas en ofrecer productos de alta calidad que potencian
                            tu día a día, brindándote la confianza y el respaldo que buscás en
                            cada compra
                        </p>
                    </div>
                </div>
                <div className="img-negocio">
                    <div
                        id="carousel-protein"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval={4000}
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carousel-protein"
                                data-bs-slide-to={0}
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            />
                            <button
                                type="button"
                                data-bs-target="#carousel-protein"
                                data-bs-slide-to={1}
                                aria-label="Slide 2"
                            />
                            <button
                                type="button"
                                data-bs-target="#carousel-protein"
                                data-bs-slide-to={2}
                                aria-label="Slide 3"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="./src/assets/images/carousel-image3.jpeg"
                                    className="d-block w-100"
                                    alt="image-protein"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="./src/assets/images/carousel-image2.jpeg"
                                    className="d-block w-100"
                                    alt="image-protein"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="./src/assets/images/carousel-image1.jpeg"
                                    className="d-block w-100"
                                    alt="image-protein"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-container">
                <div className="product-title">
                    <h2 className="text-center mb-4 mt-3">Productos Destacados</h2>
                </div>
                <ProductContainer />
            </section>
            <section className="features" id="features">
                <h2 className="feature-title text-center mt-4 mb-4">Caracteristicas</h2>
                <div className="feature-container">
                    <div className="feature">
                        <FontAwesomeIcon icon={faTruck} className="icon"/>
                        <p>Envíos a todo el país</p>
                    </div>
                    <div className="feature borderr">
                        <FontAwesomeIcon icon={faCreditCard} className="icon"/>
                        <p>Todos los medios de pago</p>
                    </div>
                    <div className="feature borderr">
                        <FontAwesomeIcon icon={faLock} className="icon" />
                        <p>Compra 100% protegida</p>
                    </div>
                </div>
            </section>
        </main>

    )
}


