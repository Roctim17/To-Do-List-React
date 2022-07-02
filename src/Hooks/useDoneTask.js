import { useQuery } from "react-query";

const useDoneTask = () => {
    const { isLoading, data, refetch } = useQuery("completedtask", () =>
        fetch("https://red-crown-02976.herokuapp.com/completed-task", {
            method: "GET",
        }).then((res) => res.json())
    );

    return [data, isLoading, refetch];
};

export default useDoneTask;