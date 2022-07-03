import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const useAddTask = () => {
    const [user] = useAuthState(auth);
    const { isLoading, data, refetch } = useQuery("addedTask", () =>
        fetch(`https://red-crown-02976.herokuapp.com/addtask/${user.email}`, {
            method: "GET",
        }).then((res) => res.json())
    );
    console.log(data)
    return [data, isLoading, refetch];
};

export default useAddTask;