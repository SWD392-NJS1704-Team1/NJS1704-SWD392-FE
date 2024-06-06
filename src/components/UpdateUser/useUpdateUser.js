import { queryClient } from "@/constant/storage";
import UserManagementListAPI from "@/services/userService";
import { closePopup } from "@/store/reducers/popupReducer";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { useDispatch } from "react-redux";

const useUpdateUser = () => {
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: UserManagementListAPI.UpdateUser,
        onSuccess: () => {
            dispatch(closePopup("Update User"));
            queryClient.invalidateQueries({ queryKey: ['getUsersList'] })
            notification.success({
                message: "Update successfully",
                description: "Update a User successfully",
            });
        },
        onError: () => {
            notification.error({
                message: "Update failed",
                description: "Update a User failed",
            });
        },
    });
};

export default useUpdateUser;