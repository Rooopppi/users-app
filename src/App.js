import { useState, useCallback } from "react";
import User from "./components/User/User";
import ControlUser from "./components/ControlUser/ControlUser";
import { nanoid } from "nanoid";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      userName: "Ivan",
      email: "test@gmail.com",
      number: 380953918321,
    },
    {
      id: 2,
      userName: "Oleg",
      email: "test@gmail.com",
      number: 380953918321,
    },
    {
      id: 3,
      userName: "Bogdan",
      email: "test@gmail.com",
      number: 380953918321,
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = useCallback(
    (user) => {
      const id = nanoid();
      const newUser = { id, ...user };
      setUsers([...users, newUser]);
    },
    [users]
  );

  const editUser = useCallback(
    (editedUser) => {
      const updatedUsers = users.map((user) =>
        editedUser.id === user.id ? editedUser : user
      );
      setUsers(updatedUsers);
      setSelectedUser(null);
    },
    [users]
  );

  const deleteUser = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  return (
    <div className="container">
      <h1 className="title">Users List</h1>
      <ControlUser
        controlUser={selectedUser ? editUser : addUser}
        selectedUser={selectedUser}
      />
      <div className="users">
        {users.length
          ? users.map((user) => (
              <User
                key={user.id}
                user={user}
                onDelete={deleteUser}
                onEdit={setSelectedUser}
              />
            ))
          : "No Users"}
      </div>
    </div>
  );
};

export default App;
