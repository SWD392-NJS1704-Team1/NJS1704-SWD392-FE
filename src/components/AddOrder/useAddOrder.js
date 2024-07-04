import { queryClient } from '@/constant/storage';
import OrderManagementListAPI from '@/services/orderService';

import { closePopup } from '@/store/reducers/popupReducer';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';

const useAddOrder = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn:OrderManagementListAPI.AddOrder,
    onSuccess: () => {
      dispatch(closePopup('Add a new Order'));
      queryClient.invalidateQueries({ queryKey: ['orderList'] });
      notification.success({
        message: 'Create successfully',
        description: 'Add a new Order successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Create failed',
        description: 'Add a new Order failed',
      });
    },
  });
};

export default useAddOrder;
