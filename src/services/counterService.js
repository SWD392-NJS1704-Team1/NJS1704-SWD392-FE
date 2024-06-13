import { COUNTERBYNAME, COUNTERLIST, CREATECOUNTER, DELETECOUNTER, UPDATECOUNTER } from '@/constant/environments';
import axiosInstance from '@/utils/axiosInstance';

const CreateCounter = async ({
    counter_name,
    location
}) => {
    try {
        const data = await axiosInstance.post(CREATECOUNTER, {
            counter_name,
            location
        });
        return data;
    } catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};

const UpdateCounter = async ({
    id,
    counter_name,
    location
}) => {
    try {
        const data = await axiosInstance.put(UPDATECOUNTER + '/' + id, {
            counter_name,
            location
        });
        return data;
    } catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};

const DeleteCounter = async (id) => {
    try {
        const data = await axiosInstance.delete(DELETECOUNTER + '/' + id);
        return data;
    } catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};

const GetCounterInfo = async (name) => {
    try {
        const data = await axiosInstance.get(COUNTERBYNAME + '?name=' + name);
        return data[0];
    } catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};

const GetCounterList = async () => {
    try {
        const data = await axiosInstance.get(COUNTERLIST);
        console.log(data);
        return data;
    } catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};

const CounterManagementListAPI = {
    GetCounterList,
    CreateCounter,
    DeleteCounter,
    GetCounterInfo,
    UpdateCounter,
};

export default CounterManagementListAPI;
