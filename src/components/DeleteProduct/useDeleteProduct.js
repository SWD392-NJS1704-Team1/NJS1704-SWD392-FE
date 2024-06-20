import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { closePopup } from '@/store/reducers/popupReducer';
import { queryClient } from '@/constant/storage';
import ProductService from '@/services/productService';

export const useDeleteProduct = (productId) => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: () => ProductService.deleteProduct(productId),
    onSuccess: () => {
      dispatch(closePopup('Delete Product'));
      queryClient.invalidateQueries({ queryKey: ['products'] });
      notification.success({
        message: 'Delete successfully',
        description: 'Delete a Product successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Delete failed',
        description: 'Delete a Product failed',
      });
    },
  });
};
