import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import TaskCard from "./TaskCard";

const Inprogress = () => {
    const axiosPublic = useAxiosPublic();

    const [inprogress, setInprogress] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPublic.get('/tasks/inprogress');
                setInprogress(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [axiosPublic]);

    return (
        <div>
            {
                inprogress.map(todo => <TaskCard
                    key={todo._id}
                    todo={todo}
                ></TaskCard>)
            }
        </div>
    );
};

export default Inprogress;