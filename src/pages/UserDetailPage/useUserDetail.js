import UserManagementListAPI from '@/services/userService';
import { useQuery } from '@tanstack/react-query';

const useUserDetail = (id) => {
  return useQuery({
    queryKey: ['getProductInfo'],
    queryFn: () => UserManagementListAPI.GetUserInfo(id),
  });
};

export default useUserDetail;
