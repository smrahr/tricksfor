import Home from "@pages/Home";
import * as routePaths from "@constants/routePaths";
import HeadsOrTails from "./pages/HeadsOrTails";
import RockPaperScissor from "./pages/RockPaperScissor";
import Dice from "./pages/Dice";
import Faq from "./pages/FAQ";

export const routes = [
  {
    path: routePaths.HOME,
    element: <Home />,
  },
  {
    path: routePaths.HeadsOrTails,
    element: <HeadsOrTails />,
  },
  {
    path: routePaths.Dice,
    element: <Dice />,
  },
  {
    path: routePaths.RockPaperScissor,
    element: <RockPaperScissor />,
  },
  {
    path: routePaths.FAQ,
    element: <Faq />,
  },
];
