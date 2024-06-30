import {
  CREATE_PROMOTION,
  DELETE_PROMOTION,
  PROMOTION_LIST,
} from '@/constant/environments';
import axiosInstance from '@/utils/axiosInstance';

const CreatePromotion = async ({
  discount_percentage,
  fixed_discount_amount,
  start_date,
  end_date,
}) => {
  try {
    const data = await axiosInstance.post(CREATE_PROMOTION, {
      discount_percentage,
      fixed_discount_amount,
      start_date,
      end_date,
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
