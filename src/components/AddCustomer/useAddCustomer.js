import UserManagementListAPI from "@/services/UserService";
import { closePopup } from "@/store/reducers/popupReducer";
import store from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";

const useAddCustomer = () => {
  const dispatch = store.dispatch;

  return useMutation({
    mutationFn: UserManagementListAPI.RegisterUser,
    onSuccess: () => {
      dispatch(closePopup("Create a new Customer"));
      notification.success({
        message: "Create successfully",
        description: "Create a new Customer successfully",
      });
    },
    onError: () => {
      notification.error({
        message: "Create failed",
        description: "Create a new Customer failed",
      });
    },
  });
};

export default useAddCustomer;
