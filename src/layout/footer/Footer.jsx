import "./Footer.css";
import userLogo from "../../assets/images/logo.png"
import { NavLink } from "react-router";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="contact-container">
                <h2 className="contact-title">Contacto</h2>
                <p>Email: hvernengo@gmail.com</p>
                <p>Teléfono: 3777-203989</p>
                <p>Dirección: Pueyrredón 240</p>
            </div>
            <div className="wrapper">
                <img src={userLogo} alt="logo" className="logo" />
                <h2 className="title-pagina">
                    Protein <span>Web</span>
                </h2>
                <p>@2026 Todos los derechos reservados</p>
            </div>
            <div className="social-media">
                <h2>Redes Sociales</h2>
                <ul className="social-list">
                    <li className="social-item">
                        <NavLink href="">
                            <i className="fa-brands fa-instagram" />
                            Protein_Web
                        </NavLink>
                    </li>
                    <li className="social-item">
                        <NavLink href="">
                            <i className="fa-brands fa-linkedin" />
                            Hipolito_Vernengo
                        </NavLink>
                    </li>
                    <li className="social-item">
                        <NavLink href="">
                            <i className="fa-brands fa-x-twitter" />
                            Hipovernengo
                        </NavLink>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
