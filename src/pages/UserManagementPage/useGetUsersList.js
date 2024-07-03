import UserManagementListAPI from '@/services/userService';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useGetUsersList = (current, limit) => {
  const searchValue = useSelector((state) => state.user.searchValue);

  return useQuery({
    queryKey: ['getUsersList', searchValue, current, limit],
    queryFn: () =>
      UserManagementListAPI.GetUsersList({
        keyword: searchValue,
        page: current,
        limit: limit,
      }),
  });
};

export default useGetUsersList;
