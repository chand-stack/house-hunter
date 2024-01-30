import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Components/Pages/Home/Home";
import Landlords from "../Components/Pages/Landlords/Landlords";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/landloard",
        element: <Landlords />,
      },
    ],
  },
]);

export default routes;
