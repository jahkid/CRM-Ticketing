import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
// import "../src/layout/Dashboardlayout.css"

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
