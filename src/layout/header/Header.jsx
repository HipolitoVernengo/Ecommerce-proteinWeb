import { NavLink } from "react-router";
import { useState } from "react";
import "./Header.css";
import userLogo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { hash } = useLocation();
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
                    className="toggle"
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
                <div className={`navbar-separar ${isMenuOpen ? " is-open" : ""}`}
                    id="header-menu">
                    <div className="navlinks">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink
                                    to="/" className={({ isActive }) =>
                                        isActive && !hash ? "nav-link active" : "nav-link"
                                    } onClick={closeMenu}>
                                    Inicio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/#features"
                                    className={({ isActive }) =>
                                        isActive && hash === "#features" ? "nav-link active" : "nav-link"
                                    }onClick={closeMenu}>
                                    Características
                                </NavLink>
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
                            <div className="admin-dropdown">
                                <NavLink to="" className="nav-link admin-trigger" onClick={closeMenu}>
                                    Admin <FontAwesomeIcon icon={faUser} />
                                </NavLink>
                                <div className="admin-submenu">
                                    <NavLink to="/admin/products" onClick={closeMenu}>Productos</NavLink>
                                    <NavLink to="/admin/users" onClick={closeMenu}>Usuarios</NavLink>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
