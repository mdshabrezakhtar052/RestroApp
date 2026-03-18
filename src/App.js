import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Career from "./component/Career";
import RestroMenu from "./component/RestroMenu";

// Context Demo
import UserContext from "./Utils/UserContext";
// import Grocery from "./component/Grocery";

//  Dynamic Bundling
//  Chunking
//  Code Splitting
//  lazy loading
//  on demand loading


const Grocery = lazy(() => import("./component/Grocery"));

// Main App Component
// const AppLayout  = () => {
//     return (
//         <div className = "app">
//             <Header />
//             <Outlet />
//         </div>
//     );
// };

// Apply Context Provider for all app level: Context Demo
const AppLayout  = () => {

    // Single Source of Truth
    const [userName, setUserName] = useState("");

    // Context API - Demo
    useEffect (() => {
        const data = {
            name:"Md Shabrez",
        };
        setUserName(data.name);
    }, []);

    return (
        // I can wrap whole app and context LoggedInUser is access everywhere or any specific portion like header only also.
        // Context is global space.
        // Provide Context (App Level) - “Hey React, make this data available to ALL components inside this tree”
        // Shared Everywhere via Context
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className = "app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>

        // <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        //     <div className = "app">
        //         <UserContext.Provider value={{loggedInUser: "Akhtar,Shabrez"}}>
        //             <Header />
        //         </UserContext.Provider>
        //         <Outlet />
        //     </div>
        // </UserContext.Provider>
        
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
             {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
             },
            //  To get different restaurant menu pass different id according to restaurant
             {
                path: "/restaurants/:resid",
                element: <RestroMenu />,
             },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);

// Router provide actually provide the routing configuration to your app 
root.render(<RouterProvider router={appRouter} />);