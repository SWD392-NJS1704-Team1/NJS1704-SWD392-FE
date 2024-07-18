import TypePricesService from '@/services/typepricesService';
import { useQuery } from '@tanstack/react-query';

export const useGetTypePriceInfo = (id) => {
  return useQuery({
    queryKey: ['getTypePriceInfo'],
    queryFn: () => TypePricesService.handleGetTypePriceById(id),
  });
};
