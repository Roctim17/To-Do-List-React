import React, { useState } from "react";
import { toast } from "react-toastify";

const EditTaskModal = ({ update, setModalShow, refetch }) => {
    const [task, setTask] = useState("");
    const updatingTask = (event) => {
        const _id = update._id;
        if (task) {
            fetch(`http://localhost:5000/edit-task/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ task: task }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount) {
                        toast.success("Task Updated", { id: 23, position: "top-right" });
                        setModalShow(null);
                        refetch();

                    }
                });
        } else {
            toast.error("Nothing will Changed", { id: 12, position: "top-right" });
        }
    };
    console.log(setTask)
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box bg-[#082032]">
                    <textarea
                        name="updating"
                        onChange={(event) => setTask(event.target.value)}
                        className="textarea block w-full h-32 text-lg resize-none  border-2 border-yellow-600"
                    ></textarea>
                    <div class="mt-5 flex items-center gap-2 justify-center">
                        <label
                            onClick={() => setModalShow(null)}
                            class="hover:bg-white hover:text-black transition-all duration-300 ease-in-out py-3 flex items-center gap-2 bg-yellow-600 text-white px-7 rounded-lg "
                        >
                            Close
                        </label>
                        <span
                            onClick={updatingTask}
                            class="hover:bg-white hover:text-black transition-all duration-300 ease-in-out py-3 flex items-center gap-2 bg-green-600 text-white px-5 rounded-lg "
                        >
                            Update
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTaskModal;