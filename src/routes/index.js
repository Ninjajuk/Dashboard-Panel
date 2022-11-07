import React from "react";
import Forms from "../Pages/Forms";

import  Home  from "../components/Home";
import PageNotFound from "../components/PageNotFound";
import TablePage from "../Pages/Tables/TablePage";

// const Home = React.lazy(() => import("../components/Home"))
// const AboutUs = React.lazy(() => import("../components/AboutUs"))
// const PageNotFound = React.lazy(() => import("../components/PageNotFound"))


const routes = [
    {
        component: <Home />,
        path: "/"
    },
    {
        component: <Forms/>,
        path: "forms"
    },
    {
        component: <TablePage/>,
        path: "tables"
    },
    {
        component: <PageNotFound />,
        path: "*"
    },
]

export default routes;