import SearchBar from '@/components/SearchBar/Search-bar';
import { Button, Table, Typography, Card } from 'antd';
// import useGetCustomerList from './useGetCustomerList';
import {OrderColumn, OrderDetailColumn } from '@/constant/table-column';
// import { useState } from 'react';

const OrderDetailPage = () => {
//   const { data } = useGetCustomerList();
//   const [page, setPage] = useState({
//     current: 1,
//     pageSize: 5,
//     total: data ? data.length : 0,
//   });
const mockJewelryData = [
    {
      key: '1',
      id: 1,
      product: 'Diamond Ring',
      type: 'Ring',
      price: 5000,
      quantity: 1,
      total: 5000
    },
    {
      key: '2',
      id: 2,
      product: 'Gold Necklace',
      type: 'Necklace',
      price: 1200,
      quantity: 2,
      total: 2400
    },
    {
      key: '3',
      id: 3,
      product: 'Silver Bracelet',
      type: 'Bracelet',
      price: 300,
      quantity: 3,
      total: 900
    },
    {
      key: '4',
      id: 4,
      product: 'Pearl Earrings',
      type: 'Earrings',
      price: 800,
      quantity: 1,
      total: 800
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
          ORDER DETAIL
        </Typography.Title>
      </div> 
      
      <div className='p-4'>
      <Card title="Information:" className=" shadow-lg" bordered={false}>
      <SearchBar />
        <div className="space-y-4 pt-4">
          <p className="text-sm"><strong>Customer Name:</strong> Nguyen Gia Huy</p>
          <p className="text-sm"><strong>Email:</strong> abc@gmail.com</p>
          <p className="text-sm"><strong>Phone:</strong> 0123456789</p>
          <p className="text-sm"><strong>Address:</strong> 123 Nguyen Trai, Ha Noi</p>
          <p className="text-sm"><strong>Point:</strong> 10</p>
          <p className="text-sm"><strong>Create by:</strong> Nhi Pham</p>
          <p className="text-sm"><strong>Create Date:</strong> 12/12/2021</p>
        </div>
      </Card>
        </div>
       <div className='p-4'>
            <Card title="Product:" className=" shadow-lg" bordered={false}>
            <SearchBar />
                <div className="space-y-4 pt-4">
                <p className="text-sm"><strong>No product here</strong> </p>
                </div>
            </Card>
      </div>
        
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 w-96 flex-col">
            <SearchBar />
          </div>
        </div>
        <Typography.Title level={3} type="secondary">
          Cart Infomation
        </Typography.Title>
        <Table
          columns={OrderDetailColumn}
          dataSource={mockJewelryData}
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

export default OrderDetailPage;
