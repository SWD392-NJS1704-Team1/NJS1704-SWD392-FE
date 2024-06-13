import { queryClient } from "@/constant/storage";
import UserManagementListAPI from "@/services/userService";
import { closePopup } from "@/store/reducers/popupReducer";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { useDispatch } from "react-redux";

const useResetPassword = () => {
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: UserManagementListAPI.ResetPassword,
        onSuccess: () => {
            dispatch(closePopup("Reset Password"));
            queryClient.invalidateQueries({ queryKey: ['getUsersList'] })
            notification.success({
                message: "Reset successfully",
                description: "Reset User successfully",
            });
        },
        onError: () => {
            notification.error({
                message: "Reset failed",
                description: "Reset User failed",
            });
        },
    });
};

export default useResetPassword;
