import { notification } from 'antd'
import { useDispatch } from 'react-redux'
import { useMutation } from '@tanstack/react-query';
import { closePopup } from '@/store/reducers/popupReducer';
import { queryClient } from '@/constant/storage';
import CounterManagementListAPI from '@/services/counterService';

export const useDeleteCounter = (id) => {

    const dispatch = useDispatch();

    return useMutation({
        mutationFn: () => CounterManagementListAPI.DeleteCounter(id),
        onSuccess: () => {
            dispatch(closePopup("Delete Counter"));
            queryClient.invalidateQueries({ queryKey: ['getCounterList'] })
            notification.success({
                message: "Delete successfully",
                description: "Delete a Counter successfully",
            })
        },
        onError: () => {
            notification.error({
                message: "Delete failed",
                description: "Delete a Counter failed",
            })
        }
    })
}
