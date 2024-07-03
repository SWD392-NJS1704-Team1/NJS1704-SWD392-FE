import { queryClient } from '@/constant/storage';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import ProductService from '@/services/productService';

const useUpdateProductDetail = () => {
  return useMutation({
    mutationFn: ProductService.updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getProductInfo'] });
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

export default useUpdateProductDetail;
