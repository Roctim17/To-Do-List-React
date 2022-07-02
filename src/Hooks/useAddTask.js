import { useQuery } from "react-query";

const useAddTask = () => {
    const { isLoading, data, refetch } = useQuery("addedTask", () =>
        fetch("http://localhost:5000/addtask", {
            method: "GET",
        }).then((res) => res.json())
    );

    return [data, isLoading, refetch];
};

export default useAddTask;