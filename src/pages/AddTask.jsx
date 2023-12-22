
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AddTask = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {

        const taskData = {
            title: data.title,
            priority: data.priority,
            deadline: data.deadline,
            description: data.description,
            status: "todo"
        }
        console.log(taskData);
        axiosPublic.post('/addtask', taskData)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('task data sent to database')
                    reset();
                }
            })
            .catch(error => {
                console.error('Error sending data to server:', error);
            });


    }

    return (
        <div className="bg-third mb-16 w-full">

            <div className="flex-col max-w-6xl bg-white p-24  mx-auto">
                <div className="text-center">
                    <h1 className="text-5xl font-poppins font-bold">Add a Task</h1>
                </div>

                <div className="flex-shrink-0 w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-6 w-full items-center mt-10">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Title*</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Task Title"
                                    className="input input-bordered"
                                    {...register("title", { required: true })}
                                />
                                {errors.title && <span>Title is required</span>}
                            </div>


                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Priority*</span>
                                </label>

                                <label>
                                    <select {...register("priority", { required: true })} name="priority" className="select select-bordered w-full" defaultValue="">
                                        <option disabled value="">Task Priority?</option>
                                        <option value="low">Low</option>
                                        <option value="moderate">Moderate</option>
                                        <option value="high">High</option>
                                    </select>
                                    {errors.priority && <span>Priority is required</span>}
                                </label>
                            </div>

                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Deadline*</span>
                                </label>
                                <label className="label">

                                    <input
                                        type="date"
                                        name="deadline"
                                        placeholder="Task Deadline"
                                        className="input w-full input-bordered -mt-2 -ml-1"
                                        {...register("deadline", { required: true })}
                                    />
                                    {errors.deadline && <span>Deadline is required</span>}
                                </label>
                            </div>


                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Description*</span>
                                </label>
                                <label>
                                    <textarea
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                        className="input input-bordered w-full"
                                        {...register("description", { required: true })}
                                    />
                                    {errors.description && <span>Description is required</span>}
                                </label>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn hover:text-gray-800 btn-block bg-second">Add Task</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;