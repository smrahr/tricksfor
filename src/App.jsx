import "./App.css";
import { routes } from "@src/routes";
import { Route, Routes } from "react-router-dom";

function App() {
  const theme = true;

  return (
    <div className={theme ? " dark" : ""}>
      <div className="dark:bg-primary-900 h-[100vh]">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
