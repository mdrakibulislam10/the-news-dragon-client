import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LogInLayouts from "../layouts/LogInLayouts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LogInLayouts />,
        children: [
            {
                path: "/",
                element: <Navigate to={"/category/0"} />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/terms",
                element: <Terms />
            }
        ]
    },
    {
        path: "/category",
        element: <Main />,
        children: [
            // {
            //     path: "/",
            //     element: <Category />,
            //     loader: () => fetch("http://localhost:5000/news/")
            // },
            {
                path: "/category/:id",
                // path: ":id",
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
                // loader: ({ params }) => console.log(params.id)
            },
        ]
    },
    {
        path: "/news",
        element: <NewsLayout />,
        children: [
            {
                path: "/news/:id",
                // path: ":id", // sudhu dynamic route likhlew root route er pase bose jabe;
                element: <PrivateRoutes> <News /> </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;