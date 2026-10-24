import { set, useForm } from "react-hook-form";
import "./AdminProducts.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import ProductRow from "../../../components/product-row/ProductRow";

const URL_BASE = "https://6a97037b0e3240db90619efc.mockapi.io";

export default function AdminProducts() {

  const { register, handleSubmit, setValue, reset, formState: {errors, isValid}} = useForm({mode: "onBlur"});
  const [products, setProducts] = useState([]);
  const [editingProductsId, setEditingProductsId] = useState(null);

  useEffect(() =>{
    obtenerProducto();
  }, []);

  async function onSubmitForm(data) {
    try{
      const product = data;

      if(editingProductsId){
        const response = await axios.put(`${URL_BASE}/products/${editingProductsId}`, product);
        Swal.fire({
        icon: "success",
        title: "Producto editado",
        text: "El producto se ha editado exitosamente"
      })
      }else{
        product.createdAt = new Date().toISOString();
        const response = await axios.post(`${URL_BASE}/products`, product);

        Swal.fire({
        icon: "success",
        title: "Producto creado",
        text: "El producto se ha creado exitosamente"
      })
    }

    setEditingProductsId(null); //Reseteo el estado de vuelta
    reset();
    obtenerProducto(); //Obtengo los productos
    

    }catch(error){
      Swal.fire({
        icon: "error",
        title: editingProductsId ? "Error al editar" : "Error al crear",
        text: editingProductsId
          ? "Hubo un error al editar el producto"
          : "Hubo un error al crear el producto"
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

   async function handleDelete(id){
    try{
      const resultado = await Swal.fire({
        icon: "warning",
        title: "Estas seguro?",
        text: "No podras revertir esto",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar"
      })

      if(!resultado.isConfirmed){
        return;
      }

      await axios.delete(`${URL_BASE}/products/${id}`);


      Swal.fire({
        icon: "success",
        title: "Producto eliminado",
        text: `El producto con el id: ${id} ha sido eliminado exitosamente`
      })

      obtenerProducto();

    }catch(error){
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrio un error al eliminar el producto"
      })
    }
  }

  async function handleEdit(id){
    try{
      //Pedimos el id y luego completamos el formulario con los datos
      //Buscamos el producto con .find

      const productoEditar = products.find((prod) =>{
        return prod.id === id;
      })

      if(productoEditar){
        setValue("image", productoEditar.image);
        setValue("name", productoEditar.name);
        setValue("description", productoEditar.description);
        setValue("createdAt", productoEditar.createdAt);
        setValue("category", productoEditar.category);
        setValue("price", productoEditar.price);
        setValue("stock", productoEditar.stock); 
      }

      setEditingProductsId(productoEditar.id);
    }catch(error){
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrio un error al editar el producto"
      })
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
                type="url" 
                id='fotoProducto'
                {...register("image")}
                className="input-file" />
            </div>
            <div className='form-input'>
              <label htmlFor="nombreProducto">Nombre</label>
              <input 
                type="text" 
                id='nombreProducto' 
                placeholder='Nombre' 
                {...register("name", {
                  required: "El nombre del producto es obligatorio",
                  minLength: {value: 3, message: "El nombre debe contener al menos 3 caracteres"},
                  maxLength: {value: 50, message:"El nombre del producto no puede tener mas de 50 caracteres"}
                })}/>

                {errors.name && <p className="error">{errors.name.message}</p>}
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
              <select {...register("category", {required: "Debe seleccionar una categoria"})} id="category"  >
                <option value="">Selecciona una categoria</option>
                <option value="Proteina">Proteina</option>
                <option value="Creatina">Creatina</option>
                <option value="Aminoacidos">Aminoacidos</option>
              </select>

              {errors.category && <p className="error">{errors.category.message}</p>}
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
                {...register("price", { valueAsNumber: true, required: "Debe ingresar un precio" })} 
                placeholder='$'/>

                {errors.price && <p className="error">{errors.price.message}</p>}
            </div>
            <div className='form-input'>
              <label htmlFor="stockProducto">Stock</label>
              <input 
                type="number" 
                id='stockProducto' 
                {...register("stock", { valueAsNumber: true, required: "Necesita ingresar un valor" })} />
            </div>
            <div className='form-input'>
              <button disabled={!isValid} className="btn-submit background mt-2">{editingProductsId ?"Editar producto":"Cargar producto"}</button>
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
                <th>Categoria</th>
                <th>Stock</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) =>{
                return <ProductRow  key={product.id} 
                                    prod = {product} 
                                    handleEdit = {handleEdit} 
                                    handleDelete = {handleDelete}/>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
