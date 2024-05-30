import UserManagementListAPI from '@/services/UserService'
import { useQuery } from '@tanstack/react-query'

const useGetCustomerList = () => {

    return useQuery({
        queryKey: ['getCustomerList'],
        queryFn: () =>
            UserManagementListAPI.GetCustomerList({ keyword: '', page: 1, limit: 100 })
    })
}

export default useGetCustomerList