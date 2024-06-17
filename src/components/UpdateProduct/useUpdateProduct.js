import { queryClient } from '@/constant/storage';
import ProductService from '@/services/productService';
import UserManagementListAPI from '@/services/userService';
import { closePopup } from '@/store/reducers/popupReducer';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';

const useUpdateProduct = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: ProductService.updateProduct,
    onSuccess: () => {
      dispatch(closePopup('Update Product'));
      queryClient.invalidateQueries({ queryKey: ['products'] });
      notification.success({
        message: 'Update successfully',
        description: 'Update a Product successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Update failed',
        description: 'Update a Product failed',
      });
    },
  });
};

export default useUpdateProduct;
