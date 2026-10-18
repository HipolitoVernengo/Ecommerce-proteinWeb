import { NavLink } from "react-router";
import { useState } from "react";
import "./Header.css";
import userLogo from "../../assets/images/logo.png";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header">
            <nav className="navbar" aria-label="Navegación principal">
                <div className="logo">
                    <NavLink to="/" onClick={closeMenu}>
                        <img src={userLogo} alt="Inicio" />
                    </NavLink>
                </div>
                <button
                    className={`toggle${isMenuOpen ? " is-open" : ""}`}
                    type="button"
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isMenuOpen}
                    aria-controls="header-menu"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <div
                    className={`navbar-separar${isMenuOpen ? " is-open" : ""}`}
                    id="header-menu"
                >
                    <div className="navlinks">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" onClick={closeMenu}>Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/features" className="nav-link" onClick={closeMenu}>Caracteristicas</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className="nav-link" onClick={closeMenu}>Productos</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="nav-link" onClick={closeMenu}>Acerca de</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="user">
                        <div className="botones">
                            <NavLink to="/register" className="register background" onClick={closeMenu}>Registrarse</NavLink>
                            <NavLink to="/login" className="login outline" onClick={closeMenu}>Iniciar Sesión</NavLink>
                        </div>
                        <div className="icons">
                            <NavLink to="/admin/products" className="nav-link" onClick={closeMenu}>
                                Admin <i className="fa-regular fa-user" aria-hidden="true" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
