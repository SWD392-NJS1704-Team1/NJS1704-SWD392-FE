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
        axiosInstance.post(import.meta.env.VITE_REGISTER_USER_API, {
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

const UserManagementListAPI = {
    RegisterUser
}

export default UserManagementListAPI