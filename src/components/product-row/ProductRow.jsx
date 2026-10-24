import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function ProductRow({prod, handleEdit, handleDelete}) {
  return (
    <tr className="align-middle">
                <td>
                  <img
                    className="img-table-admin"
                    src={prod.image}
                    alt=""
                  />
                </td>
                <td>{prod.name}</td>
                <td>{prod.description}</td>
                <td>{prod.createdAt}</td>
                <td>{`$ ${prod.price}`}</td>
                <td>{prod.category}</td>
                <td>{prod.stock}</td>
                <td>
                  <div className="buttons-table">
                    <button className="editButton" onClick={() => handleEdit(prod.id)}><FontAwesomeIcon icon={faPencil}/></button>
                    <button className="deleteButton" onClick={() => handleDelete(prod.id)}><FontAwesomeIcon icon={faTrash}/></button>
                  </div>
                </td>
              </tr>
  )
}
