import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show confirmation dialog
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        {!token && (
          <>
            <li>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName="active">
                Register
              </NavLink>
            </li>
          </>
        )}
        {token && (
          <>
            <li>
              <NavLink to="/leaderboard" activeClassName="active">
                Leaderboard
              </NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>{" "}
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default Navbar;
