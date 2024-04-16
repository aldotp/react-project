import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const url = "https://user-access-level.vercel.app";

function UserList() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(`${url}/api/users`, {
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
      <div>
        <h1>User List</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
              <th>Score</th>
              <th>Mentor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{user.score}</td>
                <td>{user.mentor ? user.mentor : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;
