import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("token");
      window.location.href = "/"; //
    }
  };

  return (
    <>
      <div className="layout-navbar">
        <Link
          to="/"
          activeClassName="active"
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          Home
        </Link>
        {!token && (
          <>
            <Link
              to="/login"
              activeClassName="active"
              style={{ marginRight: "10px", textDecoration: "none" }}
            >
              Login
            </Link>
            <Link
              to="/register"
              activeClassName="active"
              style={{ marginRight: "10px", textDecoration: "none" }}
            >
              Register
            </Link>
          </>
        )}
        {token && (
          <>
            <Link
              to="/leaderboard"
              activeClassName="active"
              style={{ marginRight: "10px", textDecoration: "none" }}
            >
              Leaderboard
            </Link>
            <Link
              to="/users"
              activeClassName="active"
              style={{ marginRight: "10px", textDecoration: "none" }}
            >
              Users
            </Link>
            <Link
              to="/about"
              activeClassName="active"
              style={{ marginRight: "10px", textDecoration: "none" }}
            >
              About
            </Link>
            <Link onClick={handleLogout} style={{ textDecoration: "none" }}>
              Logout
            </Link>
          </>
        )}
        <hr className="hr-line" />
      </div>
      <Outlet />
    </>
  );
}

export default RootLayout;
