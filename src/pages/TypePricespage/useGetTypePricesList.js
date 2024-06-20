import TypePricesService from '@/services/typepricesService';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useGetTypePricesList = () => {
  const searchValue = useSelector((state) => state.user.searchValue);

  return useQuery({
    queryKey: ['typePrices', searchValue],
    queryFn: () =>
      TypePricesService.handleGetAllTypePrices({
        keyword: searchValue,
        page: 0,
        limit: 5,
      }),
  });
};

export default useGetTypePricesList;
