import PromotionManagementListAPI from '@/services/promotionService';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useGetPromotionList = () => {
  const searchValue = useSelector((state) => state.user.searchValue);

  return useQuery({
    queryKey: ['promotionList', searchValue],
    queryFn: () => PromotionManagementListAPI.GetPromotionList(),
  });
};

export default useGetPromotionList;
