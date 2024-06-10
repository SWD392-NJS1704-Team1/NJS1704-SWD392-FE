import CustomerService from "@/services/customerService";
import { closePopup } from "@/store/reducers/popupReducer";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { useDispatch } from "react-redux";

const useAddCustomer = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: CustomerService.AddCustomer,
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
