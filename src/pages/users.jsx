import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_API_URL;

function UserList() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(`${URL}/api/users`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": token,
            },
          });
          if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
          const responseData = await response.json();
          setUsers(responseData.data);
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchData();
    }
  }, [token, navigate]);

  const [users, setUsers] = useState([]);

  return (
    <>
      <h2>Users</h2>
      <div className="container-body">
        <h3></h3>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;
