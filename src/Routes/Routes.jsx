import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import DashboardHome from "../Dashboard/DashboardHome";
import Todo from "../Dashboard/Todo";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signUp',
        element: <Register></Register>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/dashboardHome',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/todo',
                element: <Todo></Todo>
            }
        ]
    }
])