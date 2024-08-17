import Home from "@pages/Home";
import * as routePaths from "@constants/routePaths";
import HeadsOrTails from "./pages/HeadsOrTails";

export const routes = [
  {
    path: routePaths.HOME,
    element: <Home />,
  },
  {
    path: routePaths.HeadsOrTails,
    element: <HeadsOrTails />,
  },
];
