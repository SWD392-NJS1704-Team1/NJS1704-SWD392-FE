import UserManagementListAPI from '@/services/userService';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useGetUsersList = () => {

  const searchValue = useSelector((state) => state.user.searchValue);

  return useQuery({
    queryKey: ['getUsersList', searchValue],
    queryFn: () =>
      UserManagementListAPI.GetUsersList({ keyword: searchValue, page: 0, limit: 100 }),
  });
};

export default useGetUsersList;
