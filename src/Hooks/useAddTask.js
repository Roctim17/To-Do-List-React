import { useQuery } from "react-query";

const useAddTask = () => {
    const { isLoading, data, refetch } = useQuery("addedTask", () =>
        fetch("https://red-crown-02976.herokuapp.com/addtask", {
            method: "GET",
        }).then((res) => res.json())
    );

    return [data, isLoading, refetch];
};

export default useAddTask;