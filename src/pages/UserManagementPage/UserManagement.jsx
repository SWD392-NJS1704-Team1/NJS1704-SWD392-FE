import AddUser from '@/components/AddUser/AddUser';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Input, Table, Typography } from 'antd';
import useGetUsersList from './useGetUsersList';
import { UsersColumn } from '@/constant/table-column';
import SearchBar from '@/components/SearchBar/Search-bar';
import { useState } from 'react';

const UserManagement = () => {
  const { data } = useGetUsersList();
  const [page, setPage] = useState({
    current: 1,
    pageSize: 5,
    total: data ? data.length : 0,
  });

  const handleTableChange = (page) => {
    setPage(page);
  };

  return (
    <div>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          USER MANAGEMENT
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <SearchBar />
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
          dataSource={data}
          pagination={{
            ...page,
            position: ['bottomCenter'],
            showSizeChanger: false,
          }}
          onChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default UserManagement;
