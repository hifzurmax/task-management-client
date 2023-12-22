import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
const TaskCard = ({ todo }) => {
    const axiosPublic = useAxiosPublic();
    const { _id, title, priority, deadline, description } = todo;

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const updateTask = {
                status: "inprogress"
            };

            const response = await axiosPublic.patch(`/inprogress/${_id}`, updateTask);

            if (response.data.modifiedCount) {
                // show success popup
                e.target.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Task Inprogress`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {

                console.error('Request was not successful:', response.data);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                });
            }
        } catch (error) {

            console.error('Error while submitting request:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    };
    return (
        <div className="card bg-base-200 m-2 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{deadline}</div>
                    <div className="badge badge-outline">{priority}</div>
                    <button onClick={onSubmit} className="badge badge-outline">Start Task</button>

                </div>
            </div>
        </div>
    );
};

export default TaskCard;