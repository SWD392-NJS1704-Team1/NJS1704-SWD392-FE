import { PATHS } from "@/constant/path"
import LoginLayout from "@/layout/AuthLayout/LoginLayout"
import ForgotPassword from "@/pages/ForgotPage/ForgotPassword"
import Login from "@/pages/AuthPage/Login"
import Register from "@/pages/AuthPage/Register"
import ResetPassword from "@/pages/ForgotPage/ResetPassword"
import VerifyOTP from "@/pages/ForgotPage/VerifyOTP"

export const routes = [
    {
        path: PATHS.LOGIN,
        name: 'Login',
        component: Login,
        layout: LoginLayout
    },
    {
        path: PATHS.REGISTER,
        name: 'Register',
        component: Register,
        layout: LoginLayout
    },
    {
        path: PATHS.FORGOT_PASSWORD,
        name: 'Forgot Password',
        component: ForgotPassword,
        layout: LoginLayout
    },
    {
        path: PATHS.VERIFY_OTP,
        name: 'Verify OTP',
        component: VerifyOTP,
        layout: LoginLayout
    },
    {
        path: PATHS.RESET_PASSWORD,
        name: 'Reset Password',
        component: ResetPassword,
        layout: LoginLayout
    }
]