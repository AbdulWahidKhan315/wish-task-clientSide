import {  FaHome, FaList } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-64 lg:h-full lg:min-h-screen bg-purple-300">
                <ul className="menu">
                    <li className="text-gray-950 font-semibold text-base">
                        <NavLink to={'/dashboard/dashboardHome'}><RxDashboard className="text-green-500 text-lg font-bold"></RxDashboard> Dashboard Home</NavLink>
                    </li>
                            <li className="text-gray-950 font-semibold text-base">
                                <NavLink to={'/dashboard/todo'}>
                                    <FaList className="text-green-500 text-lg font-bold"></FaList> To Do
                                </NavLink>
                            </li>
                        
                    <div className="divider"></div>
                    <li className="text-gray-950 font-semibold text-base">
                        <NavLink to='/'>
                            <FaHome className="text-green-500 text-lg font-bold"></FaHome>
                            Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 lg:px-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;