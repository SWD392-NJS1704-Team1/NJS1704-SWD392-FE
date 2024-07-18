import { notification } from 'antd'
import { useDispatch } from 'react-redux'
import { useMutation } from '@tanstack/react-query';
import { closePopup } from '@/store/reducers/popupReducer';
import { queryClient } from '@/constant/storage';
import OrderManagementListAPI from '@/services/orderService';

export const useDeleteOrder = (orderID) => {

    const dispatch = useDispatch();

    return useMutation({
        mutationFn: () => OrderManagementListAPI.DeleteOrder(orderID),
        onSuccess: () => {
            dispatch(closePopup("Delete Order"));
            queryClient.invalidateQueries({ queryKey: ['orderList'] })
            notification.success({
                message: "Delete successfully",
                description: "Delete Order successfully",
            })
        },
        onError: () => {
            notification.error({
                message: "Delete failed",
                description: "Delete Order failed",
            })
        }
    })
}
