import AddProduct from "../pages/addproduct/AddProduct";
import Detail from "../pages/detail/Detail";
import Favorites from "../pages/favorites/Favorites";
import Home from "../pages/home/Home";
import NotFound from "../pages/notfound/NotFound";
import UserRoot from "../pages/UserRoot";

const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default ROUTES;
