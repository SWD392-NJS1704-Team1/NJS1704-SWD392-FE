import LoginLayout from "@/layouts/LoginLayout"
import ForgotPassword from "@/pages/ForgotPassword"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import ResetPassword from "@/pages/ResetPassword"
import VerifyOTP from "@/pages/VerifyOTP"

export const ROUTE_PATHS = {
    ROOT: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot',
    VERIFY_OTP: '/verify',
    RESET_PASSWORD: '/reset'
}

export const routes = [
    {
        path: ROUTE_PATHS.LOGIN,
        name: 'Login',
        component: Login,
        layout: LoginLayout
    },
    {
        path: ROUTE_PATHS.REGISTER,
        name: 'Register',
        component: Register,
        layout: LoginLayout
    },
    {
        path: ROUTE_PATHS.FORGOT_PASSWORD,
        name: 'Forgot Password',
        component: ForgotPassword,
        layout: LoginLayout
    },
    {
        path: ROUTE_PATHS.VERIFY_OTP,
        name: 'Verify OTP',
        component: VerifyOTP,
        layout: LoginLayout
    },
    {
        path: ROUTE_PATHS.RESET_PASSWORD,
        name: 'Reset Password',
        component: ResetPassword,
        layout: LoginLayout
    }
]