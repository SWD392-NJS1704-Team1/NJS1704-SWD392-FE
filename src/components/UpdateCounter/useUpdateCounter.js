import { queryClient } from '@/constant/storage';
import CounterManagementListAPI from '@/services/counterService';
import { closePopup } from '@/store/reducers/popupReducer';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';

const useUpdateCounter = () => {
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: CounterManagementListAPI.UpdateCounter,
        onSuccess: () => {
            dispatch(closePopup('Update Counter'));
            queryClient.invalidateQueries({ queryKey: ['getCounterList'] });
            notification.success({
                message: 'Update successfully',
                description: 'Update Counter successfully',
            });
        },
        onError: () => {
            notification.error({
                message: 'Update failed',
                description: 'Update Counter failed',
            });
        },
    });
};

export default useUpdateCounter;
