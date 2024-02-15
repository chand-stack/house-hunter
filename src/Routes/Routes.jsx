import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Components/Pages/Home/Home";
import Landlords from "../Components/Pages/Landlords/Landlords";
import Blog from "../Components/Pages/Blog/Blog";

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
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default routes;
