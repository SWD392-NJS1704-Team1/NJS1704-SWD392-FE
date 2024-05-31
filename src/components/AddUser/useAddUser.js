import UserManagementListAPI from "@/services/userService";
import { closePopup } from "@/store/reducers/popupReducer";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { useDispatch } from "react-redux";

const useAddUser = () => {
  const dispatch = useDispatch();

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
