import "./About.css";

export default function About() {
    return (
        <div className="container-information">
            <div className="info-proyecto">
                <h2 className="mb-3">Sobre este proyecto:</h2>
                <p className="proyecto-description">
                    Protein Web es una plataforma web inteligente diseñada para optimizar y
                    simplificar la gestión de suplementación deportiva. La aplicación combina
                    una interfaz de usuario fluida, rápida y atractiva con una arquitectura
                    robusta pensada para el alto rendimiento. Nuestro objetivo es brindar a
                    los atletas y entusiastas del fitness una experiencia de compra y
                    exploración de productos intuitiva, eficiente y centralizada, conectando
                    las necesidades nutricionales con las mejores opciones del mercado.
                </p>
            </div>
            <p className="frase text-center">
                Tu esfuerzo define el camino <span>Protein Web</span> potencia el destino
            </p>
            <div className="avatar-about-me-container">
                <div className="avatar">
                    <img src="./src/assets/images/foto-Avatar.jpeg" alt="avatar" />
                </div>
                <div className="about-me">
                    <p className="info-about-me">
                        Hola! Soy Hipólito Vernengo, tengo 22 años, soy de Goya, Corrientes, y
                        actualmente vivo en Chaco, donde estoy cursando mi último año de la
                        carrera de Desarrollo de Software en la UTN. Me apasiona el desarrollo
                        full-stack, la arquitectura de software y la optimización de
                        rendimiento.
                    </p>
                </div>
            </div>
        </div>

    )
}
