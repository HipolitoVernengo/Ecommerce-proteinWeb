import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserRow({user, handleDelete, handleEdit}) {
  return (
    <tr className="align-middle">
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.date}</td>
                <td>{user.country}</td>
                <td>
                  <div className="buttons-table">
                    <button className="editButton" onClick={() => handleEdit(user.id)}><FontAwesomeIcon icon={faPencil}/></button>
                    <button className="deleteButton" onClick={() => handleDelete(user.id)}><FontAwesomeIcon icon={faTrash}/></button>
                  </div>
                </td>
              </tr>
  )
}
