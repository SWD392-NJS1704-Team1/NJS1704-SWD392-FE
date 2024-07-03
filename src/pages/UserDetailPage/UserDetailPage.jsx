import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb, Card, Descriptions } from 'antd';
import { PATHS } from '@/constant/path';
import useUserDetail from './useUserDetail';

const UserDetailPage = () => {
  const { id } = useParams();
  const { data } = useUserDetail(id);
  console.log(data);

  const counterName = data?.counter?.counterName || 'N/A';
  const roleName = data?.role?.name || 'N/A';

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 w-full">
      <Card className="w-full max-w-3xl shadow-lg">
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
        <Descriptions
          title="User Details"
          bordered
          column={1}
          className="bg-white rounded-md"
        >
          <Descriptions.Item label="Full Name">
            {data?.fullname || ''}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {data?.email || ''}
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">
            {data?.phone_number || ''}
          </Descriptions.Item>
          <Descriptions.Item label="Date of Birth">
            {data?.date_of_birth || ''}
          </Descriptions.Item>
          <Descriptions.Item label="Role">{roleName}</Descriptions.Item>
          <Descriptions.Item label="Counter">{counterName}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default UserDetailPage;
