import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Component/Loading';
import useDoneTask from '../Hooks/useDoneTask';
import './Custom.css'

const CompletedTasks = () => {
    const [complete, isLoading, refetch] = useDoneTask();
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        if (complete) {
            const sorted = [...complete].reverse();
            setSortedData(sorted);
        }
    }, [complete, refetch]);

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
                    toast.success(`Deleted `);
                    refetch();
                }
            });
    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=" p-5 lg:p-10 pb-8 lg:pb-16 px-5 lg:px-10 font-ralway h-full comppleted-task">
            <div className="bg-gray-500  rounded-lg px-5 lg:px-10 pt-5 lg:pt-10 pb-8 lg:pb-16 h-full">
                <h1 className="text-2xl lg:text-3xl font-bold mb-10 flex items-center gap-3 text-white text-center m-auto">
                    {" "}
                    Task Completed
                </h1>
                <div className="space-y-3">
                    {sortedData.map((task) => (
                        <div className="flex items-center gap-5 ">
                            <p className="bg-white py-3 px-4 rounded-lg w-full">
                                {task.name}
                            </p>
                            <button
                                onClick={() => deleteTask(task._id)}
                                className=" hover:bg-[#082032] transition-all duration-300 ease-in-out py-3 flex items-center gap-2 bg-rose-600 text-white px-3 rounded-lg "
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompletedTasks;