import useAuth from "../../hooks/useAuth";

const DashboardNav = () => {
    const { user } = useAuth();
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                
                <h2>Hi, {user?.displayName}</h2>
                <div className="dropdown dropdown-end mr-8">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardNav;