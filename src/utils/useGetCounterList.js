import UserManagementListAPI from "@/services/userService";
import { useQuery } from "@tanstack/react-query";

const useGetCounterList = () => {
    return useQuery({
        queryKey: ['getCounterList'],
        queryFn: () => UserManagementListAPI.GetCounterList(),
    });
}

export default useGetCounterList;