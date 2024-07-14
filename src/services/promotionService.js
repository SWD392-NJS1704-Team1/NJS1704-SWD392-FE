import {
  CREATE_PROMOTION,
  DELETE_PROMOTION,
  PROMOTION_LIST,
} from '@/constant/environments';
import axiosInstance from '@/utils/axiosInstance';

const CreatePromotion = async ({
  discountPercentage,
  fixedDiscountAmount,
  startDate,
  endDate,
}) => {
  try {
    const data = await axiosInstance.post(CREATE_PROMOTION, {
      discountPercentage,
      fixedDiscountAmount,
      startDate,
      endDate,
    });
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const DeletePromotion = async (promotionId) => {
  try {
    const data = await axiosInstance.delete(
      DELETE_PROMOTION + '/' + promotionId
    );
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const GetPromotionList = async () => {
  try {
    const data = await axiosInstance.get(PROMOTION_LIST);
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const PromotionManagementListAPI = {
  CreatePromotion,
  DeletePromotion,
  GetPromotionList,
};

export default PromotionManagementListAPI;
