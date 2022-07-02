import { useQuery } from "react-query";

const useDoneTask = () => {
    const { isLoading, data, refetch } = useQuery("completedtask", () =>
        fetch("http://localhost:5000/completed-task", {
            method: "GET",
        }).then((res) => res.json())
    );

    return [data, isLoading, refetch];
};

export default useDoneTask;