import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Todo = () => {
    const [task, setTask] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/allTasksData')
            .then(res => {
                setTask(res.data);
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/allTasksData/${id}`)
            .then((res) => {
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "task deleted Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    const remaining = task.filter(remain => remain._id !== id);
                    setTask(remaining);
                }
            })
    }

    return (
        <div>
            <div className="flex justify-center my-4">
                <Link to='/dashboard/addTask'>
                    <button className="btn bg-purple-300"><FaPlus></FaPlus>Add Task</button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <h1 className="text-4xl text-center font-mono text-purple-800 border-b-8 border-b-purple-500">To-Do</h1>
                    {
                        task.map(single => <div key={single._id} className="card my-3 bg-purple-100 shadow-xl">
                            <div className="p-3">
                                <h2 className="card-title text-3xl text-purple-800">Name: {single.taskName}</h2>
                                <p><span className="font-bold">Description: </span> {single.description}</p>
                                <p><span className="font-bold">Priority: </span>{single.priority}</p>
                                <p><span className="font-bold">Deadline: </span>{single.deadline}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/dashboard/updateTask/${single._id}`}>
                                        <button className="btn btn-primary btn-sm"><FaEdit></FaEdit></button>
                                    </Link>
                                    <button onClick={() => handleDelete(single._id)} className="btn btn-primary btn-sm"><FaTrashAlt></FaTrashAlt></button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div>
                    <h1 className="text-4xl text-center font-mono text-purple-800 border-b-8 border-b-lime-500">Ongoing</h1>
                </div>
                <div>
                    <h1 className="text-4xl text-center font-mono text-purple-800 border-b-8 border-b-purple-500">Completed</h1>
                </div>
            </div>
        </div>
    );
};

export default Todo;