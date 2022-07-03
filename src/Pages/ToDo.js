import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Component/Loading';
import useAddTask from '../Hooks/useAddTask';
import EditTaskModal from './EditTaskModal';
import './Custom.css'


const ToDo = () => {
    const [tasks, isLoading, refetch] = useAddTask();
    const [allTasks, setAllTasks] = useState([]);
    const [modalShow, setModalShow] = useState(null);
    const [updatingTask, setUpdatingTask] = useState({});
    const [oneTask, setOneTask] = useState({});

    useEffect(() => {
        if (tasks) {
            const sorted = [...tasks].reverse();
            setAllTasks(sorted);
        }
    }, [tasks]);
    if (isLoading) {
        return <Loading />;
    }

    const deleteTask = (_id) => {
        fetch(`https://red-crown-02976.herokuapp.com/addtask/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success(`Deleted`);
                    refetch();
                }
            });
    };

    const updateTask = (_id) => {
        setModalShow(true);
        fetch(`https://red-crown-02976.herokuapp.com/edittask/${_id}`)
            .then((res) => res.json())
            .then((data) => setUpdatingTask(data));
    };

    const CompleteTask = (_id) => {
        fetch(`https://red-crown-02976.herokuapp.com/complete/${_id}`)
            .then((res) => res.json())
            .then((data) => {
                setOneTask(data);
                const tasks = { oneTask };
                fetch(`https://red-crown-02976.herokuapp.com/completed-task/${_id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(tasks),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.modifiedCount) {
                            toast.success("Added Successfully", { id: 19, position: "top-right" });
                            refetch();
                        }
                    });
            });
        //
    };

    console.log(allTasks)
    return (
        <div>

            <div className="single-todo">
                <div className="space-y-3 ">
                    <p className='font-bold pb-5 text-green-500'>My Recently added TO DO List</p>
                    {allTasks.map(
                        (task, index) =>
                            task.complete || (
                                <div key={task._id} className="">

                                    <div className="flex flex-row lg:flex-row  items-center  text-black w-full gap-3 lg:gap-5 px-3">
                                        <input
                                            type="radio" name="radio-1"
                                            onClick={() => CompleteTask(task._id)}
                                            className="hover:bg-[#2228e7] transition-all duration-300 ease-in-out  py-3 flex items-center gap-2 text-white px-3   radio "
                                        />
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </input > */}

                                        <p className="bg-[#2141e128] text-black  tracking-wider text-lg py-3 capitalize px-4 rounded-lg w-full">
                                            {!task.task ? task?.name : task?.task}
                                        </p>
                                        <div className="flex items-center gap-4">



                                            <label
                                                for="my-modal-6"
                                                onClick={() => updateTask(task._id)}
                                                class=" modal-button hover:bg-[#2228e7] transition-all duration-300 ease-in-out py-3 flex items-center gap-2 bg-[#F0A500] text-white px-3 rounded-lg "
                                            >
                                                Edit
                                            </label>
                                            <button
                                                onClick={() => deleteTask(task._id)}
                                                className=" hover:bg-[#2228e7] transition-all duration-300 ease-in-out py-3 flex items-center gap-2 bg-rose-600 text-white px-3 rounded-lg "
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            </div>
            {modalShow && (
                <EditTaskModal
                    update={updatingTask}
                    setModalShow={setModalShow}
                    refetch={refetch}
                />
            )}
        </div>


    );
};

export default ToDo;