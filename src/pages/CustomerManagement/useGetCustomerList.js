import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import CustomerService from '@/services/customerService';

const useGetCustomerList = () => {
  const searchValue = useSelector((state) => state.customer.searchValue);

  return useQuery({
    queryKey: ['getCustomerList', searchValue],
    queryFn: () =>
      CustomerService.GetCustomerList({
        keyword: searchValue,
      }),
  });
};

export default useGetCustomerList;
