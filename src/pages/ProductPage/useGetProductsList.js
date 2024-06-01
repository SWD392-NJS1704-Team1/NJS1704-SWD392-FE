import ProductService from '@/services/productService';
import { useQuery } from '@tanstack/react-query';

const useGetProductsList = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () =>
      ProductService.getAllProducts({ keyword: '', page: 0, limit: 10 }),
  });
};

export default useGetProductsList;
