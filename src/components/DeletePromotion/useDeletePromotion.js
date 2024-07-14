import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { closePopup } from '@/store/reducers/popupReducer';
import { queryClient } from '@/constant/storage';
import PromotionManagementListAPI from '@/services/promotionService';

export const useDeletePromotion = (code) => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: () => PromotionManagementListAPI.DeletePromotion(code),
    onSuccess: () => {
      dispatch(closePopup('Delete Promotion'));
      queryClient.invalidateQueries({ queryKey: ['promotionList'] });
      notification.success({
        message: 'Delete successfully',
        description: 'Delete Promotion successfully',
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Delete failed',
        description: error.message,
      });
    },
  });
};
