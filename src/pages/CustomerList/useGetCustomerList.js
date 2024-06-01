import UserManagementListAPI from '@/services/userService'
import { useQuery } from '@tanstack/react-query'

const useGetCustomerList = () => {

    return useQuery({
        queryKey: ['getCustomerList'],
        queryFn: () =>
            UserManagementListAPI.GetCustomerList({ keyword: '', page: 0, limit: 10 })
    })
}

export default useGetCustomerList