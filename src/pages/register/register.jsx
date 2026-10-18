export default function register() {
  return (
    <div className="formulario-register my-4">
  <h2 className="title-register">CREAR NUEVA CUENTA</h2>
  <form action="" className="formulario">
    <div className="inputs">
      <label htmlFor="name">Nombre completo</label>
      <input
        type="text"
        id="name"
        placeholder="John doe"
        minLength={6}
        required=""
      />
    </div>
    <div className="inputs">
      <label htmlFor="email">Correo electrónico</label>
      <input
        type="email"
        id="email"
        required=""
        placeholder="correo@correo.com"
      />
    </div>
    <div className="inputs">
      <label htmlFor="password">Contraseña</label>
      <input type="password" required="" minLength={8} />
    </div>
    <div className="inputs">
      <label htmlFor="password-repeat">Repetir contraseña</label>
      <input type="password" required="" minLength={8} />
    </div>
    <div className="inputs">
      <label htmlFor="date">Fecha de nacimiento</label>
      <input type="date" />
    </div>
    <div className="inputs">
      <label htmlFor="country">País</label>
      <select name="" id="country">
        <option value={1}>Argentina</option>
        <option value={2}>México</option>
        <option value={3}>Perú</option>
        <option value={4}>Uruguay</option>
        <option value={5}>Chile</option>
        <option value={6}>Brasil</option>
      </select>
    </div>
    <div className="inputs button-register">
      <button className="background">Registrarse</button>
    </div>
  </form>
</div>

  )
}
