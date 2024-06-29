import ProductService from '@/services/productService';
import { useQuery } from '@tanstack/react-query';

const useProductDetail = ({ id }) => {
  return useQuery({
    queryKey: ['productDetail'],
    queryFn: () => ProductService.getProductById(id),
  });
};

export default useProductDetail;
