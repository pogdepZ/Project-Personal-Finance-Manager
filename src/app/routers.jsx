import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import ProtectedRoute from "../Component/ProtectedRoute/ProtectedRoute";
import DashBoard from "../Component/Dashboard/Dashboard";
import Transactions from "../Component/Transactions/Transactions";
import Categories from "../Component/Categories/Categories";
import Budget from "../Component/Budget/Budget";
import Setting from "../Component/Setting/Setting";
import Login from "../Component/Login/Login";

const routers = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
              {
                path: "home",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "dashboard",
                        element: <DashBoard />
                    },
                    {
                        path: "transactions",
                        element: <Transactions />
                    },
                    {
                        path: "categories",
                        element: <Categories />
                    },
                    {
                        path: "budget",
                        element: <Budget />
                    },
                    {
                        path: "setting",
                        element: <Setting />
                    },

                ]
            }
        ]
    }
]

export default routers;