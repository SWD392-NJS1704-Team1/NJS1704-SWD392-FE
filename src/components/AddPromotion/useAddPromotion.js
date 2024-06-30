import { queryClient } from '@/constant/storage';
import CounterManagementListAPI from '@/services/counterService';
import PromotionManagementListAPI from '@/services/promotionService';
import { closePopup } from '@/store/reducers/popupReducer';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';

const useAddPromotion = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: PromotionManagementListAPI.CreatePromotion,
    onSuccess: () => {
      dispatch(closePopup('Add Promotion'));
      queryClient.invalidateQueries({ queryKey: ['promotionList'] });
      notification.success({
        message: 'Create successfully',
        description: 'Create a new promotion successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Create failed',
        description: 'Create a new promotion failed',
      });
    },
  });
};

export default useAddPromotion;
