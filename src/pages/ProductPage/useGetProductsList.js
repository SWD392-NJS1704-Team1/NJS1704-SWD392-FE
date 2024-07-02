import ProductService from '@/services/productService';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useGetProductsList = (current, limit) => {
  const searchValue = useSelector((state) => state.watch.searchValue);

  return useQuery({
    queryKey: ['products', searchValue, current, limit],
    queryFn: () =>
      ProductService.getAllProducts({
        keyword: searchValue,
        page: current,
        limit: limit,
      }),
  });
};

export default useGetProductsList;
