import { routes } from "@src/routes";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { useRef } from "react";

function App() {
  const theme = true;

  const resultTableRef = useRef();

  const goToHowToWork = () => {
    if (resultTableRef.current) {
      setTimeout(() => {
        resultTableRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }, 1);
    }
  };

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
