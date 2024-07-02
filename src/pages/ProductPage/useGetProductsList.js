import ProductService from '@/services/productService';
import { useQuery } from '@tanstack/react-query';

const useGetProductsList = (page, limit) => {
  return useQuery({
    queryKey: ['products', page, limit],
    queryFn: () => ProductService.getAllProducts({ keyword: '', page, limit }),
    keepPreviousData: true,
  });
};

export default useGetProductsList;
