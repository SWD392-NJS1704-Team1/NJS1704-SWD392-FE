import CustomerService from '@/services/customerService';
import { useQuery } from '@tanstack/react-query';

const useGetCustomerList = () => {
  return useQuery({
    queryKey: ['getCustomerList'],
    queryFn: () =>
      CustomerService.GetCustomerList({
        keyword: ''
      }),
  });
};

export default useGetCustomerList;
