import { useAppDispatch } from "@/lib/redux-toolkit/Hook";
import { closePopup } from "@/store/reducers/popupReducer";
import UserManagementListAPI from "@/services/userService";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";

const useAddUser = () => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: UserManagementListAPI.RegisterUser,
    onSuccess: () => {
      dispatch(closePopup("Create a new User"));
      notification.success({
        message: "Create successfully",
        description: "Create a new User successfully",
      });
    },
    onError: () => {
      notification.error({
        message: "Create failed",
        description: "Create a new User failed",
      });
    },
  });
};

export default useAddUser;
