import { queryClient } from '@/constant/storage';
import ProductService from '@/services/productService';
import { closePopup } from '@/store/reducers/popupReducer';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';

const useAddProduct = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: ProductService.handleAddProduct,
    onSuccess: () => {
      dispatch(closePopup('Add a new Product'));
      queryClient.invalidateQueries({ queryKey: ['products'] });
      notification.success({
        message: 'Create successfully',
        description: 'Add a new Product successfully',
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Create failed',
        description: error.message,
      });
    },
  });
};

export default useAddProduct;
