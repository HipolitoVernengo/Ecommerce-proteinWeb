import { set, useForm } from "react-hook-form";
import "./AdminProducts.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const URL_BASE = "https://6a97037b0e3240db90619efc.mockapi.io";

export default function AdminProducts() {

  const { register, handleSubmit } = useForm();
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    obtenerProducto();
  }, []);

  async function onSubmitForm(data) {
    try{
    const newProduct = data;
    newProduct.createdAt = new Date().toISOString();

    const response = await axios.post(`${URL_BASE}/products`, newProduct);

    Swal.fire({
      icon: "success",
      title: "Producto creado",
      text: "El producto se ha creado exitosamente"
    })

    }catch(error){
      Swal.fire({
        icon: error,
        title: "Ocurrio un error",
        text: "Hubo un error al crear el producto"
      })
    }

    // event.preventDefault();

    // const el = event.target.elements;

    // const newProducto = {
    //   file: el.file.value,
    //   name: el.name.value,
    //   description: el.description.value,
    //   fecha: el.date.value,
    //   price: el.price.value,
    //   stock: el.stock.value
  }

  async function obtenerProducto(){
    try{
    const response = await axios.get(`${URL_BASE}/products`);
    const productosObtenidos = response.data;

    setProducts(productosObtenidos);

    }catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <h2 className="bienvenida my-4 text-center">Panel de administracion</h2>

      <div className="form-table-container">
        <form className='form-admin' onSubmit={handleSubmit(onSubmitForm)}>
          <h3 className="text-center">Registro de productos</h3>
          <div className="inputs-container">
            <div className='form-input'>
              <label htmlFor="fotoProducto">Foto del producto</label>
              <input
                type="input"
                id='fotoProducto'
                {...register("image")}
                className="input-file" />
            </div>
            <div className='form-input'>
              <label htmlFor="nombreProducto">Nombre</label>
              <input 
                type="text" 
                id='nombreProducto' 
                placeholder='Nombre' {...register("name")} />
            </div>
            <div className='form-input'>
              <label htmlFor="descripcionProducto">Descripcion</label>
              <input 
                type="text"  
                id='descripcionProducto' 
                {...register("description")} />
            </div>
            <div className="form-input">
              <label htmlFor="category">Categoria</label>
              <select {...register("category")} id="category" required= "">
                <option value="">Selecciona una categoria</option>
                <option value="proteina">Proteina</option>
                <option value="creatina">Creatina</option>
                <option value="aminoacidos">Aminoacidos</option>
              </select>
            </div>
            <div className='form-input'>
              <label htmlFor="fechaProducto">Fecha de ingreso</label>
              <input 
                type="date" 
                id='fechaProducto' 
                {...register("date")} />
            </div>
            <div className='form-input'>
              <label htmlFor="precioProducto">Precio</label>
              <input 
                type="number" 
                id='precioProducto' 
                {...register("price", { valueAsNumber: true })} 
                placeholder='$' />
            </div>
            <div className='form-input'>
              <label htmlFor="stockProducto">Stock</label>
              <input 
                type="number" 
                id='stockProducto' 
                {...register("stock", { valueAsNumber: true })} />
            </div>
            <div className='form-input'>
              <button className="btn-submit background mt-2">Cargar producto</button>
            </div>

          </div>
        </form>
        <div className="table-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Ingreso</th>
                <th>Precio</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) =>{
              return <tr className="align-middle">
                <td>
                  <img
                    className="img-table-admin"
                    src="/src/assets/images/product1.webp"
                    alt=""
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.date}</td>
                <td>{`$ ${product.price}`}</td>
                <td className="buttons-table">
                  <button className="btn btn-primary">Editar</button>
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
              })}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
