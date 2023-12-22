import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import TaskCard from "./TaskCard";

const Completed = () => {
    const axiosPublic = useAxiosPublic();

    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPublic.get('/tasks/completed');
                setCompleted(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [axiosPublic]);
    return (
        <div>
            {
                completed.map(todo => <TaskCard
                    key={todo._id}
                    todo={todo}
                ></TaskCard>)
            }
        </div>
    );
};

export default Completed;