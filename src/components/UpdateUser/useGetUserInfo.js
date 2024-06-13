import UserManagementListAPI from '@/services/userService';
import { useQuery } from '@tanstack/react-query';

export const useGetUserInfo = (userId) => {
  return useQuery({
    queryKey: ['getUserInfo', userId],
    queryFn: () => UserManagementListAPI.GetUserInfo(userId),
  });
};
