import "./home.css";

export default function Home() {
    return (
        <main className="main-container">
            <section className="banner mt-4">
                <img src="./src/assets/images/leo_nutreko_elements_s1_h1.webp" alt="banner" />
                <div className="banner-sentence-container">
                    <p className="banner-sentence">
                        <span>ELEVATE </span>
                    </p>
                    <p className="banner-sentence text-white">YOUR GAINS</p>
                    <div className="button-banner">
                        <a href="#" className="background">
                            Ver productos
                        </a>
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
                <div className="products">
                    <div className="card">
                        <div className="card-header">
                            <img src="/assets/products/product1.webp" alt="" />
                            <div className="ver-mas">
                                <a href="/pages/product-detail.html">
                                    Ver más <i className="fa-solid fa-magnifying-glass" />
                                </a>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Whey Protein Star Nutrition - (907g)</h2>
                            <p className="category">Proteina</p>
                            <div className="price-buy">
                                <p className="precio">$55.000</p>
                                <a href="/pages/product-detail.html" className="buy">
                                    Comprar <i className="fa-solid fa-bag-shopping" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img
                                src="https://www.enasport.com/cdn/shop/files/TM_WP_2lbCh.webp?v=1779904463&width=1000"
                                alt=""
                            />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">TrueMade Whey Protein (930 Gr)</h2>
                            <p className="category">Proteina</p>
                            <div className="price-buy">
                                <p className="precio">$45.000</p>
                                <a href="" className="buy">
                                    Comprar <i className="fa-solid fa-bag-shopping" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img
                                src="https://farmalife.vtexassets.com/arquivos/ids/190555-1200-auto?v=638636532007070000&width=1200&height=auto&aspect=true"
                                alt=""
                            />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Creatina Micronizada Neutro X 300 G</h2>
                            <p className="category">Creatina</p>
                            <div className="price-buy">
                                <p className="precio">$23.000</p>
                                <a href="" className="buy">
                                    Comprar <i className="fa-solid fa-bag-shopping" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img
                                src="https://farmacityar.vtexassets.com/arquivos/ids/286947/162463_suplemento-dietario-creatina-micronizada-sabor-fruit-punch-x-300-gr_imagen-1.jpg?v=639027070168230000"
                                alt=""
                            />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                                Creatina Micronizada Sabor a Fruit Punch x 300 g
                            </h2>
                            <p className="category">Creatina</p>
                            <div className="price-buy">
                                <p className="precio">$26.000</p>
                                <a href="" className="buy">
                                    Comprar <i className="fa-solid fa-bag-shopping" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCto3NeZcNX1gl1ARrKSym_nXm8mX8G_ppng&s"
                                alt=""
                            />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                                TRUEMADE AMINO FULL 146 GRS (BCAA+CAFEINA) ENA SPORT
                            </h2>
                            <p className="category">Aminoacidos</p>
                            <div className="price-buy">
                                <p className="precio">$55.000</p>
                                <a href="" className="buy">
                                    Comprar <i className="fa-solid fa-bag-shopping" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img
                                src="https://acdn-us.mitiendanube.com/stores/006/011/728/products/amino_4500_150tab-1-2afbc108c0247c383717527639545279-1024-1024.webp"
                                alt=""
                            />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">ENA Amino 4500 150 TABS</h2>
                            <p className="category">Proteina</p>
                            <div className="price-buy">
                                <p className="precio">$28.000</p>
                                <a href="" className="buy">
                                    Comprar <i className="fa-solid fa-bag-shopping" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img
                                src="https://farmacityar.vtexassets.com/arquivos/ids/258066-500-auto?v=638986541848970000&width=500&height=auto&aspect=true"
                                alt=""
                            />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Shaker Pure Wellness</h2>
                            <p className="category">Vasos</p>
                            <div className="price-buy">
                                <p className="precio">$20.000</p>
                                <a href="" className="buy">
                                    Comprar <i className="fa-solid fa-bag-shopping" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img
                                src="https://farmacityar.vtexassets.com/arquivos/ids/249565-500-auto?v=638362761999800000&width=500&height=auto&aspect=true"
                                alt=""
                            />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                                Barra Proteica Pure Wellness Sabor Cookies and Cream x 46 g
                            </h2>
                            <p className="category">Barra proteica</p>
                            <div className="price-buy">
                                <p className="precio">$55.000</p>
                                <a href="" className="buy">
                                    Comprar <i className="fa-solid fa-bag-shopping" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features" id="features">
                <h2 className="feature-title text-center mt-4 mb-4">Caracteristicas</h2>
                <div className="feature-container">
                    <div className="feature">
                        <i className="fa-solid fa-truck-fast icon" />
                        <p>Envíos a todo el país</p>
                    </div>
                    <div className="feature borderr">
                        <i className="fa-solid fa-credit-card icon" />
                        <p>Todos los medios de pago</p>
                    </div>
                    <div className="feature borderr">
                        <i className="fa-solid fa-lock icon" />
                        <p>Compra 100% protegida</p>
                    </div>
                </div>
            </section>
        </main>

    )
}


