import "./App.css";
import GlobalContext from "./context/index";
import { router } from "./routers";

import { RouterProvider } from "react-router-dom";

function App() {
  const user = {
    username: "Aldo",
  };

  return (
    <>
      <div className="App">
        <GlobalContext.Provider value={user}>
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;
