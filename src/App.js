import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Career from "./component/Career";
import RestroMenu from "./component/RestroMenu";

// Main App Component
const AppLayout  = () => {
    return (
        <div className = "app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter(
    [
    // Way - 1: Route

    //    {
    //     path: "/",
    //     element: <AppLayout />,
    //     // Way to handle error in the routing
    //     errorElement: <Error />,
    //    },
    //    {
    //     path: "/about",
    //     element: <About />,
    //    },
    //    {
    //     path: "/contact",
    //     element: <Contact />,
    //    },
    //    {
    //     path: "/career",
    //     element: <Career />
    //    }


    // Way - 2 : Use children route

    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/career",
                element: <Career />,
             },
            //  To get different restaurant menu pass different id according to restaurant
             {
                path: "/restaurants/:resid",
                element: <RestroMenu />,
             }
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);

// Router provide actually provide the routing configuration to your app 
root.render(<RouterProvider router={appRouter} />);