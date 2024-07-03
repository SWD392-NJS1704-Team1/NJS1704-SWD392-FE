import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import CounterManagementListAPI from '@/services/counterService';

const useGetCounterList = () => {
  const searchValue = useSelector((state) => state.counter.searchValue);

  return useQuery({
    queryKey: ['getCounterList', searchValue],
    queryFn: () =>
      CounterManagementListAPI.GetCounterList({
        keyword: searchValue,
      }),
  });
};

export default useGetCounterList;
