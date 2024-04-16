import { useState, useEffect } from "react";

const url = "https://user-access-level.vercel.app";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/api/users`);
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
  }, []);

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
