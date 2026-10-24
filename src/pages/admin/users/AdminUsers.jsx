import axios from "axios";
import { useForm } from "react-hook-form"
import { URL_BASE } from "../../../services/ProductServices";
import { useEffect, useState } from "react";
import "./AdminUsers.css";
import Swal from "sweetalert2";
import UserRow from "../../../components/user-row/UserRow";

export default function AdminUsers() {
  const { register, handleSubmit, setValue, formState: { errors, isValid }, reset } = useForm({ mode: "onBlur" });

  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  async function getUsers() {
    const response = await axios.get(`${URL_BASE}/users`);

    const user = response.data;

    setUsers(user);

  }



  useEffect(() => {
    getUsers();
  }, [])

  async function onSubmitForm(data) {
    try {

      const user = data;

      if (isEditing) {
        const response = await axios.put(`${URL_BASE}/users/${isEditing}`, user);
        Swal.fire({
          icon: "success",
          title: "Usuario editado",
          text: "El usuario se ha editado exitosamente"
        })
      } else {

        const response = await axios.post(`${URL_BASE}/users`, user);

        Swal.fire({
          icon: "success",
          title: "Usuario creado",
          text: "El usuario se ha creado exitosamente"
        })
      }

      setIsEditing(null); //Reseteo el estado de vuelta
      getUsers();
      reset();


    } catch (error) {
      Swal.fire({
        icon: "error",
        title: isEditing ? "Error al editar" : "Error al crear",
        text: isEditing
          ? "Hubo un error al editar el producto"
          : "Hubo un error al crear el producto"
      })
    }
  }

  async function handleDelete(id) {
    try {
      const resultado = await Swal.fire({
        icon: "warning",
        title: "Estas seguro?",
        text: "No podra revertir esta acción",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar"
      })

      if (!resultado.isConfirmed) {
        return;
      }

      await axios.delete(`${URL_BASE}/users/${id}`)

      Swal.fire({
        icon: "success",
        title: "Producto eliminado",
        text: `El producto con el id: ${id} ha sido eliminado exitosamente`
      })

      getUsers();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrio un error al eliminar el producto"
      })
    }
  }

  async function handleEdit(id) {
    try{
      const user = users.find((usuario) =>{
        return usuario.id === id;
      })

      if(user){ 
        setValue("name", user.name);
        setValue("surname", user.surname);
        setValue("email", user.email);
        setValue("password", user.password);
        setValue("date", user.date);
        setValue("country", user.country); 
      }

      setIsEditing(user.id);

    }catch(error){
      Swal.fire({
              icon: "error",
              title: "Error",
              text: "Ocurrio un error al editar el usuario"
            })
    }
    
  }



  return (
    <div>
      <h2 className="bienvenida my-4 text-center">Panel de administracion</h2>

      <div className="form-table-container">
        <div className="formulario-register">
          <h2 className="title-register">Registro de usuarios</h2>
          <form action="" className="formulario" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="inputs">
              <label htmlFor="username">Nombre completo</label>
              <input
                type="text"
                id="username"
                placeholder="John doe"
                {...register("name", {
                  required: "Debe ingresar un nombre",
                  minLength: { value: 3, message: "El nombre debe tener como minimo 3 caracteres" }
                }
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
                  minLength: { value: 3, message: "El apellido debe tener como minimo 3 caracteres" }
                }
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
                  required: "Debe ingresar un email valido", pattern: {
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
                  required: "Debe ingresar una contraseña", minLength: { value: 8, message: "Debe contener al menos 8 caracteres" }
                })} />
              {errors.password && <p className="error">{errors.password.message}</p>}
            </div>
            <div className="inputs">
              <label htmlFor="confirmPassword">Repetir contraseña</label>
              <input type="password" id="confirmPassword" {...register("confirmPassword", { required: "La contraseña debe coincidir" })} />


            </div>
            <div className="inputs">
              <label htmlFor="date">Fecha de nacimiento</label>
              <input type="date" {...register("date", { required: "Debe ingresar su fecha de nacimiento" })} />

              {errors.date && <p className="error">{errors.date.message}</p>}
            </div>
            <div className="inputs">
              <label htmlFor="country">País</label>
              <select id="country" {...register("country", { required: "Debe seleccionar un pais" })}>
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
              <button disabled={!isValid} className="btn-submit background">{isEditing ? "Editar ": "Registrarse"}</button>
            </div>
          </form>
        </div>
        <div className="table-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Contraseña</th>
                <th>Fecha nacimiento</th>
                <th>Pais</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return <UserRow user={user} key={user.id} handleDelete={handleDelete} handleEdit={handleEdit}/>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
