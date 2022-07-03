import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const useDoneTask = () => {
    const [user] = useAuthState(auth);
    const { isLoading, data, refetch } = useQuery("completedtask", () =>
        fetch(`https://red-crown-02976.herokuapp.com/completed-task?=${user.email}`, {
            method: "GET",
        }).then((res) => res.json())
    );

    return [data, isLoading, refetch];
};

export default useDoneTask;