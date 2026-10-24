import { useForm } from "react-hook-form";
import "./Register.css";
import axios from "axios";
import { URL_BASE } from "../../services/ProductServices";
import Swal from "sweetalert2";

export default function Register() {

  const {register, handleSubmit, formState :{errors, isValid}, reset} = useForm({mode: "onBlur"})

  async function onSubmitForm(data) {
    try{
    const user = data;

    const response = await axios.post(`${URL_BASE}/users`,user);

    Swal.fire({
            icon: "success",
            title: "Usuario creado",
            text: "El usuario se ha creado correctamente"
          })
  }catch(error){
    Swal.fire({
      icon: "error",
      title: "Ocurrio un error",
      text: "Ocurrio un error al registrarse, verifica e intenta nuevamente"
    })

  }

  reset();
}


  return (
    <div className="form-container">
    <div className="formulario-register my-4">
      <h2 className="title-register">CREAR NUEVA CUENTA</h2>
      <form action="" className="formulario" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="inputs">
          <label htmlFor="username">Nombre completo</label>
          <input
            type="text"
            id="username"
            placeholder="John doe"
            {...register("name", {
                          required: "Debe ingresar un nombre", 
                          minLength: {value: 3, message: "El nombre debe tener como minimo 3 caracteres"}}
                        )}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
        <div className="inputs">
          <label htmlFor="surname">Apellido</label>
          <input
            type="text"
            id="surname"
            placeholder="John doe"
            {...register("surname", {
                          required: "Debe ingresar su apellido", 
                          minLength: {value: 3, message: "El apellido debe tener como minimo 3 caracteres"}}
                        )}
          />
          {errors.surname && <p className="error">{errors.surname.message}</p>}
        </div>
        <div className="inputs">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="correo@correo.com"
            {...register("email", {
                          required: "Debe ingresar un email valido",pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingresá un email válido",
              }
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="inputs">
          <label htmlFor="password">Contraseña</label>
          <input type="password" 
          {...register("password", {
            required: "Debe ingresar una contraseña", minLength: {value:8, message:"Debe contener al menos 8 caracteres"}})} />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <div className="inputs">
          <label htmlFor="confirmPassword">Repetir contraseña</label>
          <input type="password" id="confirmPassword" {...register("confirmPassword", {required: "La contraseña debe coincidir"})} />


        </div>
        <div className="inputs">
          <label htmlFor="date">Fecha de nacimiento</label>
          <input type="date" {...register("date", {required: "Debe ingresar su fecha de nacimiento"})}/>

          {errors.date && <p className="error">{errors.date.message}</p>}
        </div>
        <div className="inputs">
          <label htmlFor="country">País</label>
          <select id="country" {...register("country", {required: "Debe seleccionar un pais"})}>
            <option value="Argentina">Argentina</option>
            <option value="Mexico">México</option>
            <option value="Perú">Peru</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Chile">Chile</option>
            <option value="Brasil">Brasil</option>
          </select>

          {errors.country && <p className="error">{errors.country.message}</p>}
        </div>
        <div className="inputs button-register">
          <button disabled = {!isValid} className="btn-submit background">Registrarse</button>
        </div>
      </form>
    </div>
    </div>
  )
}
