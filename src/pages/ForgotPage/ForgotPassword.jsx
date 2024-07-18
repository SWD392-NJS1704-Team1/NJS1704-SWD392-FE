import { PATHS } from "@/constant/path";
import { MESS, REGEX } from "@/constant/validate";
import { UserOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate(PATHS.VERIFY_OTP);
  };

  return (
    <>
      <div className="bg-slate-950 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-40 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          FORGOT PASSWORD
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative my-4">
            <input
              type="email"
              className="block w-96 py-2.5 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-amber-400 focus:outline-none focus:ring-0 focus:text-white focus:border-amber-400 peer"
              placeholder=""
              {...register("email", {
                required: MESS.ERROR_EMAIL,
                pattern: {
                  value: REGEX.EMAIL,
                  message: MESS.ERROR_EMAIL_INVALID,
                },
              })}
            />
            <label
              htmlFor=""
              className="absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-400 peer-focus:dark:text-amber-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
            <UserOutlined className="absolute top-4 right-4" />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-amber-400 hover:bg-amber-500 hover:text-white py-2 transition-colors duration-300"
          >
            SEND OTP
          </button>
          <div className="flex justify-end items-center">
            <Link to={PATHS.LOGIN} className="text-amber-400">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default ForgotPassword;
