import {
    createBrowserRouter,
    matchRoutes,
    Navigate,
    useLocation
  } from "react-router-dom";
import { Home, Hotel, Bars, Attrractions, About, Casinos,Contact, Terms, Privacy} from "../Pages";
const routes = [
    {
        path:"/",
        element:<Home />,
    },
    {
        path:"/hôtels",
        element:<Hotel />
    },
    {
        path:"/casinos",
        element:<Casinos />
    },
    {
        path:"/barres",
        element:<Bars />
    },
    {
        path:"/attractions",
        element:<Attrractions />
    },
    {
        path:"/à-propos",
        element:<About />
    },
    {
        path:"/contactez-nous",
        element:<Contact />
    },
    {
        path:"/termes-et-conditions",
        element:<Terms />
    },
    {
        path:"/politique-de-confidentialité",
        element:<Privacy />
    },
];
export const router = createBrowserRouter(routes, { basename: "/fr" });

export const useCurrentPath = () => {
  const location = useLocation();
  const [{ pathname }]: any = matchRoutes(routes, location);
  return pathname;
};