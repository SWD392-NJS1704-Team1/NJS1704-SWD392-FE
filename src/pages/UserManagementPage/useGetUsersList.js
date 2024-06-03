import UserManagementListAPI from '@/services/userService';
import { useQuery } from '@tanstack/react-query';

const useGetUsersList = () => {
  return useQuery({
    queryKey: ['getUsersList'],
    queryFn: () =>
      UserManagementListAPI.GetUsersList({ keyword: '', page: 0, limit: 5 }),
  });
};

export default useGetUsersList;
