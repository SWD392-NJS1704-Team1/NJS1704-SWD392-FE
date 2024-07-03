import { queryClient } from '@/constant/storage';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import UserManagementListAPI from '@/services/userService';

const useUpdateUserDetail = () => {
  return useMutation({
    mutationFn: UserManagementListAPI.UpdateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getUserInfo'] });
      notification.success({
        message: 'Update successfully',
        description: 'Update a User successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Update failed',
        description: 'Update a User failed',
      });
    },
  });
};

export default useUpdateUserDetail;
