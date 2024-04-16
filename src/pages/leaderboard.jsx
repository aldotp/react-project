import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const URL = "https://user-access-level.vercel.app";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found. Please login again.");
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
          navigate("/");
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
      <Navbar />
      <div className="container">
        <h2>Leaderboard</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
        <div>
          {leaderboardData.map((classroom, index) => (
            <div key={index}>
              <h3>{classroom.class_name}</h3>
              <p>Total Mentee: {classroom.total_mentee}</p>
              <p>Mentor: {classroom.mentor}</p>
              <ul>
                {classroom.mentees.map((mentee, index) => (
                  <li key={index}>
                    {mentee.username} - Score: {mentee.score}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
