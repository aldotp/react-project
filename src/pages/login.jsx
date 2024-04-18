import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "https://user-access-level.vercel.app";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiURL = `${URL}/api/auth/login`;

    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
        throw new Error(`${errorData.message}`);
      }

      const data = await response.json();
      const { token } = data;
      localStorage.setItem("token", token);
      navigate("/leaderboard");
      window.location.reload();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className="container-body">
        <div className="login">
          <h2 style={{ textAlign: "center" }}>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" style={{ marginRight: "10px" }}>
                Username :
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ marginRight: "10px" }}>
                Password :
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
