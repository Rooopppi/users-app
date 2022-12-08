import "./User.css";
import { RxCross1 } from "react-icons/rx";
import { AiFillEdit } from "react-icons/ai";

const User = ({ user, onDelete, onEdit }) => {
  return (
    <div className="user">
      <table>
        <tbody>
          <tr>
            <th>Username:</th>
            <td>{user.userName}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Number:</th>
            <td>{user.number}</td>
          </tr>
        </tbody>
      </table>
      <div className="controls">
        <AiFillEdit
          style={{ color: "blue", marginRight: "10px" }}
          onClick={() => onEdit(user)}
        />
        <RxCross1 style={{ color: "red" }} onClick={() => onDelete(user.id)} />
      </div>
    </div>
  );
};

export default User;
