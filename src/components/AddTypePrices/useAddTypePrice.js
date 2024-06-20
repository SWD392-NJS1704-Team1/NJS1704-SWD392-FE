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
      dispatch(closePopup('Create a new type price'));
      queryClient.invalidateQueries({ queryKey: ['typePrices'] });
      notification.success({
        message: 'Create successfully',
        description: 'Create a new type price successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Create failed',
        description: 'Create a new type price failed',
      });
    },
  });
};

export default useAddTypePrice;
