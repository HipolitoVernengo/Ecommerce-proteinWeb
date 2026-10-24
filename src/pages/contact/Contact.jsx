import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact-page">
            <h2>Contacto</h2>
            <div className="contact-grid">
                <div className="contact-form-container">
                    <form className="contact-form">
                        <div className="contact-field">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                maxLength={20}
                                id="nombre"
                                placeholder="John Doe"
                                required=""
                            />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                required=""
                                placeholder="Email@gmail.com"
                            />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="textarea">Mensaje</label>
                            <textarea
                                name="mensaje"
                                id="textarea"
                                required=""
                                placeholder="Dejenos su mensaje"
                                rows={5}
                            />
                        </div>
                        <div className="contact-field">
                            <button type="submit" className="contact-send-button">Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="contact-map">
                    <iframe
                        title="Ubicación en Resistencia, Chaco"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1770.3046626144862!2d-58.98737092046395!3d-27.45028359740543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf45f586243%3A0xfe773f943b9e37ce!2sH3506%20Resistencia%2C%20Chaco!5e0!3m2!1ses!2sar!4v1781397962325!5m2!1ses!2sar"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>

    )
}
