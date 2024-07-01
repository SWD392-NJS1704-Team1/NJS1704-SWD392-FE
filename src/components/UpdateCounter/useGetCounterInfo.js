import CounterManagementListAPI from '@/services/counterService';
import { useQuery } from '@tanstack/react-query';

export const useGetCounterInfo = (name) => {
    return useQuery({
        queryKey: ['getCounterInfo', name],
        queryFn: () => CounterManagementListAPI.GetCounterInfo(name),
    });
};
