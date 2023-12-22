import Completed from "./Tasks/Completed";
import Inprogress from "./Tasks/Inprogress";
import Todos from "./Tasks/Todos";

const DashboardHome = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-evenly border">
                <div>
                    <h2>Todos</h2>
                    <Todos></Todos>
                </div>
                <div>
                    <h2>Inprogress</h2>
                    <Inprogress></Inprogress>
                </div>
                <div>
                    <h2>Completed</h2>
                    <Completed></Completed>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;