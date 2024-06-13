import { MESS } from "@/constant/validate";
import { closePopup } from "@/store/reducers/popupReducer";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import ConfigAntdButton from "../Button/ConfigAntdButton";
import { useDispatch } from "react-redux";
import { useGetCounterInfo } from "./useGetCounterInfo";
import useUpdateCounter from "./useUpdateCounter";
import { useEffect } from "react";

const UpdateCounter = ({ id, name }) => {
    const dispatch = useDispatch();
    const { data } = useGetCounterInfo(name);
    const updateCounter = useUpdateCounter()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        updateCounter.mutate({
            id: id,
            counter_name: data.counter_name,
            location: data.location
        })
    };

    const handleCancel = () => {
        dispatch(closePopup("Update Counter"));
    };

    useEffect(() => {
        if (data) {
            reset({
                counter_name: data.counterName,
                location: data.location,
            });
        }
    }, [data, reset]);

    return (
        <div className="p-2">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex m-4">
                    <h1 className="w-1/4 flex font-bold items-center mr-4">Counter Name</h1>
                    <div className="w-3/4">
                        <input
                            type="text"
                            className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                            placeholder="Counter name..."
                            {...register("counter_name", { required: MESS.ERROR_COUNTER_NAME })}
                        />
                        {errors.counter_name && (
                            <span className="text-red-500 text-sm">
                                {errors.counter_name.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex m-4">
                    <h1 className="w-1/4 flex font-bold items-center mr-4">Location</h1>
                    <div className="w-3/4">
                        <input
                            type="text"
                            className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                            placeholder="Location..."
                            {...register("location", { required: MESS.ERROR_LOCATION })}
                        />
                        {errors.location && (
                            <span className="text-red-500 text-sm">
                                {errors.location.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex flex-row gap-1 justify-center p-4">
                    <ConfigAntdButton type="danger">
                        <Button type="primary" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </ConfigAntdButton>
                    <ConfigAntdButton>
                        <Button type="primary" onClick={handleSubmit(onSubmit)}>
                            Update
                        </Button>
                    </ConfigAntdButton>
                </div>
            </form>
        </div>
    );
};

export default UpdateCounter;
