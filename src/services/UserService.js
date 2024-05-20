import { REGISTER, USERLIST } from "@/constant/environments"
import axiosInstance from "@/utils/axiosInstance"

const RegisterUser = ({
    fullname,
    email,
    phone_number,
    address,
    date_of_birth,
    role_id,
    counter_id
}) => {
    try {
        axiosInstance.post(REGISTER, {
            fullname,
            email,
            phone_number,
            address,
            date_of_birth,
            role_id,
            counter_id
        })
    } catch (error) {
        const errorResponse = error
        throw new Error(errorResponse.response?.data.message)
    }
}

const GetUsersList = async ({
    keyword,
    page,
    limit
}) => {
    if (!page || !limit) return undefined

    try {
        const endpoint = USERLIST
        const queryParams = `page=${page}&limit=${limit}`
        let value = ''

        if (value && value.length > 0) {
            value = `keyword=${keyword}&`
        }

        const { data } = await axiosInstance.get(
            `${endpoint}?${value}${queryParams}`
        )

        return data.data
    } catch (error) {
        const errorResponse = error
        throw new Error(errorResponse.response?.data.message)
    }
}

const UserManagementListAPI = {
    RegisterUser,
    GetUsersList
}

export default UserManagementListAPI