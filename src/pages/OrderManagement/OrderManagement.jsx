import AddCustomer from '@/components/AddCustomer/AddCustomer';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import SearchBar from '@/components/SearchBar/Search-bar';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import useGetOrderList from './useGetOrderList';
import {OrderColumn } from '@/constant/table-column';
import AddOrder from '@/components/AddOrder/AddOrder';
// import { useState } from 'react';

const CustomerList = () => {
  const { data, isLoading } = useGetOrderList();
//   const [page, setPage] = useState({
//     current: 1,
//     pageSize: 5,
//     total: data ? data.length : 0,
//   });

  const handleTableChange = (page) => {
    setPage(page);
  };

  console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          ORDER HISTORY
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 w-96 flex-col">
            <SearchBar />
          </div>
          <div className="flex">
            <Popup title="Add a new Order" content={<AddOrder />}>
              <ConfigAntdButton>
                <Button type="primary" icon={<PlusCircleOutlined />}>
                  Create Order
                </Button>
              </ConfigAntdButton>
            </Popup>
          </div>
        </div>
        <Table
          columns={OrderColumn}
          dataSource={data}
        //   pagination={{
        //     ...page,
        //     position: ['bottomCenter'],
        //     showSizeChanger: false,
        //   }}
          onChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default CustomerList;
