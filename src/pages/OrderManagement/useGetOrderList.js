import OrderManagementListAPI from '@/services/orderService';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useGetOrderList = () => {
  const searchValue = useSelector((state) => state.user.searchValue);

  return useQuery({
    queryKey: ['orderList', searchValue],
    queryFn: () => OrderManagementListAPI.GetOrderList(),
  });
};

export default useGetOrderList;
