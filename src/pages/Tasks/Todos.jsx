import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import TaskCard from "./TaskCard";

const Todos = () => {
    const axiosPublic = useAxiosPublic();

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPublic.get('/tasks/todo');
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [axiosPublic]);
    console.log(todos);
    return (
        <div>
            {
                todos.map(todo => <TaskCard
                    key={todo._id}
                    todo={todo}
                ></TaskCard>)
            }
        </div>
    );
};

export default Todos;