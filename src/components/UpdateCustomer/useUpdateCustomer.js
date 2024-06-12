import { queryClient } from '@/constant/storage';
import CustomerService from '@/services/customerService';

import { closePopup } from '@/store/reducers/popupReducer';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';

const useUpdateCustomer = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: CustomerService.UpdateCustomer,
    onSuccess: () => {
      dispatch(closePopup('Update Customer'));
      queryClient.invalidateQueries({ queryKey: ['getUsersList'] });
      notification.success({
        message: 'Update successfully',
        description: 'Update customer successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Update failed',
        description: 'Update customer failed',
      });
    },
  });
};

export default useUpdateCustomer;
