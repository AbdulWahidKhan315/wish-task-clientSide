import { FaPlus } from "react-icons/fa";


const Todo = () => {
    return (
        <div>
            <div className="flex justify-center">
                <button className="btn bg-purple-300"><FaPlus></FaPlus>Add Task</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="border">
                    <h1 className="text-4xl text-center font-mono text-purple-800">To-Do</h1>
                </div>
                <div>
                    <h1 className="text-4xl text-center font-mono text-purple-800">Ongoing</h1>
                </div>
                <div>
                    <h1 className="text-4xl text-center font-mono text-purple-800">Completed</h1>
                </div>
            </div>
        </div>
    );
};

export default Todo;