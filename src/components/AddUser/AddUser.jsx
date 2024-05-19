import { PATHS } from "@/constant/path";
import { MESS, REGEX } from "@/constant/validate";
import { Button, Input, Select, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ROLE = [
    { value: 'manager', label: 'Manager' },
    { value: 'staff', label: 'Staff' }
]

const COUNTER = [
    { value: '1', label: '1' },
    { value: '2', label: '2' }
]

const GENDER = [
    { value: true, label: 'Male' },
    { value: false, label: 'Female' }
]

const STATUS = [
    { value: true, label: 'Active' },
    { value: false, label: 'Inactive' }
]

const AddUser = () => {

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate(PATHS.LOGIN);
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <Typography.Text className="font-semibold block">Username</Typography.Text>
                <Controller
                    name="userName"
                    control={control}
                    render={({ field }) => (
                        <>
                            <Input {...field} id="userName" placeholder="Username..." />
                            {errors.userName && <p className="text-red-500">{errors.userName.message}</p>}
                        </>
                    )}
                />
            </div>
            <div className="flex flex-col gap-1">
                <Typography.Text className="font-semibold block">Email name</Typography.Text>
                <Controller
                    name="emailName"
                    control={control}
                    render={({ field }) => (
                        <>
                            <Input
                                {...field}
                                id="emailName"
                                placeholder="Email..."
                                {...register("email", {
                                    required: MESS.ERROR_EMAIL,
                                    pattern: {
                                        value: REGEX.EMAIL,
                                        message: MESS.ERROR_EMAIL_INVALID,
                                    },
                                })}
                            />
                            {errors.emailName && <p className="text-red-500">{errors.emailName.message}</p>}
                        </>
                    )}
                />
            </div>
            <div className="flex flex-col gap-1">
                <Typography.Text className="font-semibold block">Phone</Typography.Text>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <>
                            <Input {...field} id="phone" placeholder="Phone number..." />
                            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                        </>
                    )}
                />
            </div>
            <div className="flex flex-col gap-1">
                <Typography.Text className="font-semibold block">Role</Typography.Text>
                <Controller
                    name="role"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <>
                            <Select {...field} id="role" placeholder="Select one" options={ROLE} />
                            {errors.role && <p className="text-red-500">{errors.role.message}</p>}
                        </>
                    )}
                />
            </div>
            <div className="flex flex-col gap-1">
                <Typography.Text className="font-semibold block">Counter</Typography.Text>
                <Controller
                    name="counter"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <>
                            <Select {...field} id="counter" placeholder="Select one" options={COUNTER} />
                            {errors.counter && <p className="text-red-500">{errors.counter.message}</p>}
                        </>
                    )}
                />
            </div>
            <div className="flex flex-col gap-1">
                <Typography.Text className="font-semibold block">Gender</Typography.Text>
                <Controller
                    name="gender"
                    control={control}
                    defaultValue={true}
                    render={({ field }) => (
                        <>
                            <Select {...field} id="gender" options={GENDER} />
                            {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                        </>
                    )}
                />
            </div>
            <div className="flex flex-col gap-1">
                <Typography.Text className="font-semibold block">Status</Typography.Text>
                <Controller
                    name="status"
                    control={control}
                    defaultValue={true}
                    render={({ field }) => (
                        <>
                            <Select {...field} id="status" options={STATUS} />
                            {errors.status && <p className="text-red-500">{errors.status.message}</p>}
                        </>
                    )}
                />
            </div>
            <div className="flex flex-row gap-1 justify-center">
                <Button type="primary" danger>
                    Cancel
                </Button>
                <Button type="primary" onClick={handleSubmit(onSubmit)}>
                    Add
                </Button>
            </div>
        </div>
    )
}

export default AddUser