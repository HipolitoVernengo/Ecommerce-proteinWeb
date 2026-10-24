import { useForm } from "react-hook-form";
import "./Login.css";

export default function Login() {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onBlur" });

  async function onSubmitForm(data) {

  }

  return (
    <div className="formul-container">
      <div className="formul-login">
        <h2>INICIAR SESIÓN</h2>
        <form action="" className="formul" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="inputs">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register("email", {
              required: "Por favor ingrese su email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingresá un email válido",
              }
            } )
          } />
          { errors.email && <p className="error">{errors.email.message}</p> }
        </div>
          <div className="inputs">
            <label htmlFor="password">Contraseña</label>
            <input id="password" type="password" {...register("password", { required: "Por favor ingrese la contraseña", minLength: { value: 8, message: "Debe incluir al menos 8 caracteres" } })} />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          <div className="inputs">
            <button disabled={!isValid} className="btn-submit background">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  )
}
