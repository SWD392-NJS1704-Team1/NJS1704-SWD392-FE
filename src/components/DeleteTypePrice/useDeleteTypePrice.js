import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { closePopup } from '@/store/reducers/popupReducer';
import { queryClient } from '@/constant/storage';
import TypePricesService from '@/services/typepricesService';

export const useDeleteTypePrice = (id) => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: () => TypePricesService.handleDeleteTypePrice(id),
    onSuccess: () => {
      dispatch(closePopup('Delete Type Price'));
      queryClient.invalidateQueries({ queryKey: ['typePrices'] });
      notification.success({
        message: 'Delete successfully',
        description: 'Delete a Type Price successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Delete failed',
        description: 'Delete a Type Price failed',
      });
    },
  });
};
