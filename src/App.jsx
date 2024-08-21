import { routes } from "@src/routes";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import { useRef, useState } from "react";
import Home from "./pages/Home/index";

function App() {
  const theme = true;
  const howToWorkRef = useRef();
  const [goToWork, setGoToWork] = useState(false);
  const navigate = useNavigate();

  const goToHowToWork = () => {
    setGoToWork(true);
    navigate("/");
    setTimeout(() => {
      if (howToWorkRef.current && !goToWork) {
        setTimeout(() => {
          howToWorkRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          });
        }, 1);
      }
      setGoToWork(false);
    }, 500);
  };

  return (
    <div className={theme ? " dark" : ""}>
      <div className=" dark:bg-primary-900 dark:text-white text-[40px]">
        <Layout goToHowToWork={goToHowToWork}>
          <Routes>
            {routes.map((route, index) =>
              index === 0 ? (
                <Route
                  path="/"
                  key={index}
                  element={<Home ref={howToWorkRef} />}
                />
              ) : (
                <Route key={index} {...route} />
              )
            )}
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;
