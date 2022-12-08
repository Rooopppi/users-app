import { useState, useEffect } from "react";
import "./ControlUser.css";

const defaultUser = {
  userName: "",
  email: "",
  number: "",
};

const ControlUser = ({ controlUser, selectedUser }) => {
  const [user, setUser] = useState(defaultUser);

  const onSubmit = (e) => {
    e.preventDefault();

    controlUser(user);

    setUser(defaultUser);
  };

  const changeHandle = (e, field) => {
    setUser({ ...user, [field]: e.target.value });
  };

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>User</label>
        <input
          type="text"
          placeholder="User Name"
          value={user.userName}
          onChange={(e) => changeHandle(e, "userName")}
          required
        />
      </div>
      <div className="form-control">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => changeHandle(e, "email")}
          required
        />
      </div>
      <div className="form-control">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="380953918321"
          pattern="[0-9]{12}"
          value={user.number}
          onChange={(e) => changeHandle(e, "number")}
          required
        />
      </div>

      <button className="controlUser">
        {selectedUser ? "Edit user" : "Add User"}
      </button>
    </form>
  );
};

export default ControlUser;
