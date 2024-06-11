import { notification } from 'antd'
import { useDispatch } from 'react-redux'
import { useMutation } from '@tanstack/react-query';
import { closePopup } from '@/store/reducers/popupReducer';
import { queryClient } from '@/constant/storage';
import CustomerService from '@/services/customerService';

export const useDeleteCustomer = (id) => {

    const dispatch = useDispatch();

    return useMutation({
        mutationFn: () => CustomerService.DeleteCustomer(id),
        onSuccess: () => {
            dispatch(closePopup("Delete Customer"));
            queryClient.invalidateQueries({ queryKey: ['getCustomerList'] })
            notification.success({
                message: "Delete successfully",
                description: "Delete customer successfully",
            })
        },
        onError: () => {
            notification.error({
                message: "Delete failed",
                description: "Delete customer failed",
            })
        }
    })
}