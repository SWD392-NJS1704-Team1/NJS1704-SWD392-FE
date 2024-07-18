import { queryClient } from '@/constant/storage';
import TypePricesService from '@/services/typepricesService';
import { closePopup } from '@/store/reducers/popupReducer';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';

const useAddTypePrice = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: TypePricesService.handleCreateTypePrice,
    onSuccess: () => {
      dispatch(closePopup('Add a new Type Price'));
      queryClient.invalidateQueries({ queryKey: ['typePrices'] });
      notification.success({
        message: 'Create successfully',
        description: 'Add a new Type Price successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Create failed',
        description: 'Add a new Type Price failed',
      });
    },
  });
};

export default useAddTypePrice;
