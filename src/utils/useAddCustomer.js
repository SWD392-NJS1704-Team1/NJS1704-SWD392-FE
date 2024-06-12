import { queryClient } from "@/constant/storage";
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
  dispatch(closePopup("Add a new Customer"));
  setTimeout(() => {
    queryClient.invalidateQueries('getCustomerList');
  }, 1000); // delay of 1 second
  notification.success({
    message: "Create successfully",
    description: "Add a new Customer successfully",
  });
},
    onError: () => {
      console.log(error);
      notification.error({
        message: "Create failed",
        description: "Add a new Customer failed",
      });
    },
  });
};

export default useAddCustomer;
