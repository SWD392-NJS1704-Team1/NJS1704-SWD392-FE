import CounterManagementListAPI from '@/services/counterService';
import { useQuery } from '@tanstack/react-query';

const useGetCounterList = () => {
    return useQuery({
        queryKey: ['getCounterList'],
        queryFn: () =>
            CounterManagementListAPI.GetCounterList()
    });
};

export default useGetCounterList;
