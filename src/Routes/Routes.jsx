import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import DashboardHome from "../Dashboard/DashboardHome";
import Todo from "../Dashboard/Todo";
import AddTask from "../Dashboard/AddTask";
import PrivateRoutes from '../../src/Routes/PrivateRoutes'
import UpdateTask from "../Dashboard/UpdateTask";

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
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/dashboardHome',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/todo',
                element: <Todo></Todo>
            },
            {
                path: '/dashboard/addTask',
                element: <AddTask></AddTask>
            },
            {
                path: '/dashboard/updateTask/:id',
                element: <UpdateTask></UpdateTask>,
                loader: ({params})=> fetch(`http://localhost:5000/findone/${params.id}`)
            }
        ]
    }
])