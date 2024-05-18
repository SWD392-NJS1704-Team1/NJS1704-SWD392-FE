import { UnlockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/reset');
    };

    return (
        <div>
            <div className="bg-slate-950 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-40 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-6 ">LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative my-4">
                        <input type="email" className="block w-96 py-2.5 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-amber-400 focus:outline-none focus:ring-0 focus:text-white focus:border-amber-400 peer" placeholder="" />
                        <label htmlFor="" className="absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-400 peer-focus:dark:text-amber-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        <UserOutlined className="absolute top-4 right-4" />
                    </div>
                    <div className="relative my-4">
                        <input type="password" className="block w-96 py-2.5 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-amber-400 focus:outline-none focus:ring-0 focus:text-white focus:border-amber-400 peer" placeholder="" />
                        <label htmlFor="" className="absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-400 peer-focus:dark:text-amber-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        <UnlockOutlined className="absolute top-4 right-4" />
                    </div>
                    <div className="flex justify-end items-center">
                        <Link to='/forgot' className="text-amber-400">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-amber-400 hover:bg-amber-500 hover:text-white py-2 transition-colors duration-300">LOGIN</button>
                    <div className="flex">
                        <span className="m-2">New Here? <Link to='/register' className="text-amber-400">Create an Account</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;