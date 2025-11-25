import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import ProtectedRoute from "../Component/ProtectedRoute/ProtectedRoute";
import DashBoard from "../Component/Dashboard/DashBoard.jsx";
import Transactions from "../Component/Transactions/Transactions";
import Categories from "../Component/Categories/Categories";
import Budget from "../Component/Budget/Budget";
import Setting from "../Component/Setting/Setting";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";


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
                path: "register",
                element: <Register />
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