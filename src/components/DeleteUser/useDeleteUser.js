import { notification } from 'antd'
import { useDispatch } from 'react-redux'
import UserManagementListAPI from '@/services/userService'
import { useMutation } from '@tanstack/react-query';
import { closePopup } from '@/store/reducers/popupReducer';
import { queryClient } from '@/constant/storage';

export const useDeleteUser = (userId) => {

    const dispatch = useDispatch();

    return useMutation({
        mutationFn: () => UserManagementListAPI.DeleteUser(userId),
        onSuccess: () => {
            dispatch(closePopup("Delete User"));
            queryClient.invalidateQueries({ queryKey: ['getUsersList'] })
            notification.success({
                message: "Delete successfully",
                description: "Delete a User successfully",
            })
        },
        onError: () => {
            notification.error({
                message: "Delete failed",
                description: "Delete a User failed",
            })
        }
    })
}
