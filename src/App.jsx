import { routes } from "@src/routes";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  const theme = true;

  return (
    <div className={theme ? " dark" : ""}>
      <div className=" dark:bg-primary-900 dark:text-white text-[40px]">
        <Layout>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;
