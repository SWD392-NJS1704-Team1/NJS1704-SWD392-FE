import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Breadcrumb,
  Button,
  Card,
  Descriptions,
  Form,
  Input,
  Select,
  Spin,
  Typography,
} from 'antd';
import { PATHS } from '@/constant/path';
import useUserDetail from './useUserDetail';
import useGetCounterList from '../CounterManagement/useGetCounterList';
import useUpdateUserDetail from './useUpdateUserDetail';
import { Controller, useForm } from 'react-hook-form';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import { EditOutlined } from '@ant-design/icons';
import { MESS, REGEX } from '@/constant/validate';

const UserDetailPage = () => {
  const { id } = useParams();
  const { data } = useUserDetail(id);
  const { data: counterList, isLoading } = useGetCounterList();
  const [isEdit, setIsEdit] = useState(false);
  const updateUser = useUpdateUserDetail();
  const [selectedRole, setSelectedRole] = useState(data?.role?.id);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateUser.mutate({
      id: id,
      fullname: data.fullname,
      email: data.email,
      phone_number: data.phone_number,
      date_of_birth: data.date_of_birth,
      role_id: data.role_id,
      counter_id: selectedRole !== 2 ? data.counter_id : null,
    });
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
    setSelectedRole(data?.role?.id);
    reset();
  };

  useEffect(() => {
    if (data) {
      reset({
        fullname: data?.fullname,
        email: data?.email,
        phone_number: data?.phone_number,
        date_of_birth: data?.date_of_birth,
        role_id: data?.role?.id,
        counter_id: data?.counter?.id,
      });
    }
  }, [data, reset]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spin />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 w-full">
      <Card className="w-full max-w-3xl shadow-lg">
        {!isEdit && (
          <div className="flex float-end">
            <ConfigAntdButton type="primary">
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={handleEdit}
              >
                Update User
              </Button>
            </ConfigAntdButton>
          </div>
        )}
        <div className="mb-4">
          <Breadcrumb
            items={[
              {
                title: <Link to={PATHS.USER.INDEX}>Users List</Link>,
              },
              {
                title: 'User Detail',
              },
            ]}
          />
        </div>
        <Form onFinish={handleSubmit(onSubmit)} layout="horizontal">
          <Descriptions
            title="User Details"
            bordered
            column={1}
            className="bg-white rounded-md"
          >
            <Descriptions.Item label="Full Name">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="fullname"
                    control={control}
                    defaultValue=""
                    rules={{ required: MESS.ERROR_NAME }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Full name..." />
                    )}
                  />
                  {errors.fullname && (
                    <p className="text-red-500">{errors.fullname.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.fullname}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: MESS.ERROR_EMAIL,
                      pattern: {
                        value: REGEX.EMAIL,
                        message: MESS.ERROR_EMAIL_INVALID,
                      },
                    }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Email..." />
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.email}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Phone Number">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="phone_number"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: MESS.ERROR_PHONE,
                      pattern: {
                        value: REGEX.PHONE,
                        message: MESS.ERROR_PHONE_INVALID,
                      },
                    }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Phone number..." />
                    )}
                  />
                  {errors.phone_number && (
                    <p className="text-red-500">
                      {errors.phone_number.message}
                    </p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.phone_number}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Date of Birth">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="date_of_birth"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: MESS.ERROR_DOB,
                      pattern: {
                        value: REGEX.DOB,
                        message: MESS.ERROR_DOB_INVALID,
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Date of birth(DD/MM/YYYY)..."
                      />
                    )}
                  />
                  {errors.date_of_birth && (
                    <p className="text-red-500">
                      {errors.date_of_birth.message}
                    </p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.date_of_birth}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Role">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="role_id"
                    control={control}
                    defaultValue=""
                    rules={{ required: MESS.ERROR_COUNTER }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="--Select Role--"
                        onChange={(value) => {
                          setSelectedRole(value);
                          field.onChange(value);
                        }}
                      >
                        <Select.Option value={2}>Manager</Select.Option>
                        <Select.Option value={3}>Staff</Select.Option>
                      </Select>
                    )}
                  />
                  {errors.role_id && (
                    <p className="text-red-500">{errors.role_id.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.role?.name}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Counter">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="counter_id"
                    control={control}
                    defaultValue=""
                    rules={{ required: MESS.ERROR_COUNTER }}
                    disabled={selectedRole === 2}
                    render={({ field }) => (
                      <Select {...field} placeholder="--Select Counter--">
                        {counterList?.map((counter) => (
                          <Select.Option key={counter.id} value={counter.id}>
                            {counter.counterName}
                          </Select.Option>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.counter_id && (
                    <p className="text-red-500">{errors.counter_id.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.counter?.counterName}</Typography>
              )}
            </Descriptions.Item>
          </Descriptions>

          {isEdit && (
            <div className="button-group mt-4 flex gap-2 float-end">
              <ConfigAntdButton type="danger">
                <Button type="primary" onClick={handleCancel}>
                  Cancel
                </Button>
              </ConfigAntdButton>
              <ConfigAntdButton type="primary">
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </ConfigAntdButton>
            </div>
          )}
        </Form>
      </Card>
    </div>
  );
};

export default UserDetailPage;
