import ProductService from '@/services/productService';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useGetProductsList = (page, limit) => {
  const searchValue = useSelector((state) => state.watch.searchValue);

  return useQuery({
    queryKey: ['products', searchValue, page, limit],
    queryFn: () =>
      ProductService.getAllProducts({
        keyword: searchValue,
        page: 0,
        limit: 5,
      }),
  });
};

export default useGetProductsList;
