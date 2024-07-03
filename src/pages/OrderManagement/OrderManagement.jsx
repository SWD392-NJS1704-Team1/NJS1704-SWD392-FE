import AddCustomer from '@/components/AddCustomer/AddCustomer';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import SearchBar from '@/components/SearchBar/Search-bar';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
// import useGetCustomerList from './useGetCustomerList';
import {OrderColumn } from '@/constant/table-column';
import AddOrder from '@/components/AddOrder/AddOrder';
// import { useState } from 'react';

const CustomerList = () => {
//   const { data } = useGetCustomerList();
//   const [page, setPage] = useState({
//     current: 1,
//     pageSize: 5,
//     total: data ? data.length : 0,
//   });
const mockData = [
  {
    key: '1',
    id: 1,
    fullName: 'ORD1001',
    name: 'John Doe',
    staffName: 'Alice Johnson',
    date: '2023-04-01',
    type: 'Online',
    status: 'Processing'
  },
  {
    key: '2',
    id: 2,
    fullName: 'ORD1002',
    name: 'Jane Smith',
    staffName: 'Bob Brown',
    date: '2023-04-02',
    type: 'In-store',
    status: 'Completed'
  },
  {
    key: '3',
    id: 3,
    fullName: 'ORD1003',
    name: 'Michael Davis',
    staffName: 'Chris Green',
    date: '2023-04-03',
    type: 'Online',
    status: 'Cancelled'
  },
  {
    key: '4',
    id: 4,
    fullName: 'ORD1004',
    name: 'Emily Clark',
    staffName: 'Diana Carter',
    date: '2023-04-04',
    type: 'In-store',
    status: 'Processing'
  }
];
  const handleTableChange = (page) => {
    setPage(page);
  };

  // console.log(data)
  return (
    <div>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          ORDER LIST
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
          dataSource={mockData}
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
