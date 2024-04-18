import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/index";
import UserList from "../pages/users";
import Login from "../pages/login";
import Leaderboard from "../pages/leaderboard";
import Register from "../pages/register";
import About from "../pages/about";
import RootLayout from "../layouts/rootLayout";
import Blog from "../pages/blogs";
import { AuthContextProvider } from "../context/authContextProvider";
import Post from "../pages/blogs/_id";
import { posts, postByID } from "../apis/loaders";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <AuthContextProvider>
          <RootLayout />
        </AuthContextProvider>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: postByID,
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
