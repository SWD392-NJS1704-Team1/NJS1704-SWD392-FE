import { queryClient } from "@/constant/storage";
import ProductService from "@/services/productService";
import { closePopup } from "@/store/reducers/popupReducer";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { useDispatch } from "react-redux";

const useAddProduct = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: ProductService.handleAddProduct,
    onSuccess: () => {
      dispatch(closePopup("Create a new Product"));
      queryClient.invalidateQueries({ queryKey: ['products'] })
      notification.success({
        message: "Create successfully",
        description: "Create a new Product successfully",
      });
    },
    onError: () => {
      notification.error({
        message: "Create failed",
        description: "Create a new Product failed",
      });
    },
  });
};

export default useAddProduct;