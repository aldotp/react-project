import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function RootLayout() {
  const [token, setToken] = useState("");

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("token");
      window.location.href = "/"; //
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken || "");
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="left-links">
          <NavLink
            to="/"
            activeClassName="active"
            style={{ margin: "10px", color: "white" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="active"
            style={{ margin: "10px", color: "white" }}
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="active"
            style={{ margin: "10px", color: "white" }}
          >
            Blog
          </NavLink>
          {token && (
            <>
              <NavLink
                to="/leaderboard"
                activeClassName="active"
                style={{ margin: "10px", color: "white" }}
              >
                Leaderboard
              </NavLink>
              <NavLink
                to="/users"
                activeClassName="active"
                style={{ margin: "10px", color: "white" }}
              >
                Users
              </NavLink>
            </>
          )}
        </div>
        <div className="right-links">
          {!token && (
            <>
              <NavLink
                to="/login"
                activeClassName="active"
                style={{ margin: "10px", color: "white" }}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                activeClassName="active"
                style={{ margin: "10px", color: "white" }}
              >
                Register
              </NavLink>
            </>
          )}
          {token && (
            <>
              <NavLink
                onClick={handleLogout}
                style={{ margin: "10px", color: "white" }}
              >
                Logout
              </NavLink>
            </>
          )}
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <p>© 2024 My Company. All rights reserved.</p>
      </div>
    </>
  );
}

export default RootLayout;
