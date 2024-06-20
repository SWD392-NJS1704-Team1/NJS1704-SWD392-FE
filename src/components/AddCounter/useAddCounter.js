import { queryClient } from '@/constant/storage';
import CounterManagementListAPI from '@/services/counterService';
import { closePopup } from '@/store/reducers/popupReducer';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';

const useAddCounter = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: CounterManagementListAPI.CreateCounter,
    onSuccess: () => {
      dispatch(closePopup('Create a new counter'));
      queryClient.invalidateQueries({ queryKey: ['getCounterList'] });
      notification.success({
        message: 'Create successfully',
        description: 'Create a new counter successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Create failed',
        description: 'Create a new counter failed',
      });
    },
  });
};

export default useAddCounter;
