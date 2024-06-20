import { queryClient } from '@/constant/storage';
import TypePricesService from '@/services/typepricesService';
import { closePopup } from '@/store/reducers/popupReducer';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';

const useUpdateTypePrice = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: TypePricesService.handleUpdateTypePrice,
    onSuccess: () => {
      dispatch(closePopup('Update Type Prices'));
      queryClient.invalidateQueries({ queryKey: ['typePrices'] });
      notification.success({
        message: 'Update successfully',
        description: 'Update a Type Price successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Update failed',
        description: 'Update a Type Price failed',
      });
    },
  });
};

export default useUpdateTypePrice;
