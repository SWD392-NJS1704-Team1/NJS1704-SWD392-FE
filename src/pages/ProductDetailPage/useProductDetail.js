import ProductService from '@/services/productService';
import { useQuery } from '@tanstack/react-query';

const useProductDetail = (id) => {
  return useQuery({
    queryKey: ['getProductInfo'],
    queryFn: () => ProductService.handleGetProductById(id),
  });
};

export default useProductDetail;
