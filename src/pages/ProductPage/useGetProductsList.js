import ProductService from '@/services/productService';
import { useQuery } from '@tanstack/react-query';

const LIMIT = 5;

const useGetProductsList = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () =>
      ProductService.getAllProducts('', 1, LIMIT),
  });
};

export default useGetProductsList;
