import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import logo from "../assets/tasks.png"
import DashboardNav from "../pages/Shared/DashboardNav";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const { logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-third">

                <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                {/* Page content here */}
                <DashboardNav></DashboardNav>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side shadow-xl mr-4 min-h-full">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex m-8 gap-2">
                    <img className="w-8 h-8" src={logo} alt="" />
                    <h1 className="text-2xl font-bold">Tasks</h1>
                </div>
                <ul className="menu p-8 space-y-1 w-70 bg-main font-semibold text-md">
                    <li><NavLink to="/dashboard"><FaHome></FaHome>Dashboard</NavLink></li>
                    <li><NavLink to="/dashboard/addtask"><FaHome></FaHome>Add Task</NavLink></li>
                    <li><NavLink to="/dashboard"><FaGear /> Settings</NavLink></li>
                    <button onClick={handleLogOut} className="bg-blue-400 py-2 flex items-center gap-2 pl-4 rounded-lg">
                    <FaSignOutAlt /> Logout
                    </button>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;