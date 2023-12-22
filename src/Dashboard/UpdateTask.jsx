import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateTask = () => {
    const data2 = useLoaderData();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        axios.put(`http://localhost:5000/allTasksData/${data2._id}`, data)
            .then((res) => {
                console.log(res)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "task Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/todo')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="bg-purple-100 p-3 h-full">
            <h1 className="text-3xl my-2">Update Task</h1>
            <div className="border bg-purple-200 p-3 w-full lg:w-[500px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Your task name?</span>
                            </div>
                            <input {...register('taskName')} type="text" defaultValue={data2.taskName} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Task Description</span>
                            </div>
                            <textarea {...register('description')} className="textarea textarea-bordered h-24" defaultValue={data2.description} required></textarea>
                        </label>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Priority</span>
                            </div>
                            <select {...register('priority')} className="p-2 rounded-lg" defaultValue={data2.priority} required>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Deadline</span>
                            </div>
                            <input {...register('deadline')} type="date" defaultValue={data2.deadline} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <input className="btn my-2 w-full bg-purple-500 text-white font-bold hover:bg-purple-800" type="submit" value='Update' />
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;