import ProductService from '@/services/productService';
import { useQuery } from '@tanstack/react-query';

export const useGetProductInfo = (id) => {
  return useQuery({
    queryKey: ['getProductInfo'],
    queryFn: () => ProductService.handleGetProductById(id),
  });
};
