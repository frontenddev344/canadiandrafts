import {
    createBrowserRouter,
    matchRoutes,
    Navigate,
    useLocation
  } from "react-router-dom";
import { Home, Hotel, Bars, Attrractions, About, Casinos,Contact,Privacy,Terms} from "../Pages";
const routes = [
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/hotel",
        element:<Hotel />
    },
    {
        path:"/casinos",
        element:<Casinos />
    },
    {
        path:"/bars",
        element:<Bars />
    },
    {
        path:"/attrractions",
        element:<Attrractions />
    },
    {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<Contact />
    },
    {
        path:"/privacy",
        element:<Privacy />
    },
    {
        path:"/terms",
        element:<Terms />
    },
];
export const router = createBrowserRouter(routes, { basename: "/" });

export const useCurrentPath = () => {
  const location = useLocation();
  const [{ pathname }]: any = matchRoutes(routes, location);
  return pathname;
};