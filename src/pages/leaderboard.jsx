import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_API_URL;

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
        }

        const response = await fetch(`${URL}/api/leaderboard`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        });

        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch data");
        }

        const data = await response.json();
        setLeaderboardData(data.data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <>
      <h2>Leaderboard</h2>
      <div className="container-body">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Total Mentee</th>
              <th>Mentor</th>
              <th>Mentees</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((classroom, index) => (
              <tr key={index}>
                <td>{classroom.class_name}</td>
                <td>{classroom.total_mentee}</td>
                <td>{classroom.mentor.username}</td>
                <td>
                  <table>
                    <thead>
                      <tr>
                        <th>Mentee Name</th>
                        <th>Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classroom.mentees.map((mentee, index) => (
                        <tr key={index}>
                          <td>{mentee.username}</td>
                          <td>{mentee.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Leaderboard;
