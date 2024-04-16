import "./App.css";
import Home from "./pages/index";
import UserList from "./pages/users";
import Login from "./pages/login";
import Leaderboard from "./pages/leaderboard";
import Register from "./pages/register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
