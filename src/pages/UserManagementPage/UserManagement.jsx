import AddUser from '@/components/AddUser/AddUser';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import useGetUsersList from './useGetUsersList';
import { UsersColumn } from '@/constant/table-column';
import { useState } from 'react';
import UserSearchBar from '@/components/SearchBar/Search-bar';

const UserManagement = () => {
  const [current, setCurrent] = useState(1);
  const [limit, setLimit] = useState(5);
  const { data } = useGetUsersList(current - 1, limit);

  return (
    <div
      style={{
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div className="bg-white w-full flex items-center p-4 mt-1 rounded-lg shadow-sm">
        <Typography.Title level={3} type="secondary">
          USER MANAGEMENT
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4 mt-4 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <UserSearchBar />
          <div className="flex">
            <Popup title="Create a new User" content={<AddUser />}>
              <ConfigAntdButton>
                <Button type="primary" icon={<PlusCircleOutlined />}>
                  Add new
                </Button>
              </ConfigAntdButton>
            </Popup>
          </div>
        </div>
        <Table
          columns={UsersColumn}
          dataSource={data?.usersData}
          pagination={{
            total: data?.usersPage * limit,
            position: ['bottomCenter'],
            current: current,
            pageSize: limit,
            pageSizeOptions: [5, 10, 20, 30],
            showSizeChanger: true,
            onChange: (current, limit) => {
              setCurrent(current);
              setLimit(limit);
            },
          }}
          scroll={{
            x: 1800,
          }}
        />
      </div>
    </div>
  );
};

export default UserManagement;
