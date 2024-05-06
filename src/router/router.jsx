import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Admin from "../Pages/Admin/My_courses"
import About from "../Pages/Monitoring/About";
import Sertificat from "../Pages/Sertificats/Sertificat";
import Logout from "../Pages/Logout/Logout";
import Video from "../Pages/Videolar/Video";
import Kurs from "../Pages/Barcha kurslar/Kurslar";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <About />,
            },
            {
                path: "/admin",
                element: <Admin />,
            },

            {
                path: "/Barcha-kurslar",
                element: <Kurs />,
            },
            {
                path: "/video",
                element: <Video/>,
            },
            {
                path: "/Sertificat",
                element: <Sertificat/>,
            },

        ]
    },
    {
        path: "/Logout",
        element: <Logout />
    }
]);

export default router;