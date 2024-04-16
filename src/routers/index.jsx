import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/index";
import UserList from "../pages/users";
import Login from "../pages/login";
import Leaderboard from "../pages/leaderboard";
import Register from "../pages/register";
import About from "../pages/about";
import RootLayout from "../layouts/rootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/users",
        element: <UserList />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
