import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Spin, Table, Typography } from 'antd';
import { CustomersColumn } from '@/constant/table-column';
import AddCustomer from '@/components/AddCustomer/AddCustomer';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import useGetCustomerList from './useGetCustomerList';
import CustomerSearchBar from '@/components/SearchBar/Customer-search-bar';

const CustomerList = () => {
  const { data, isLoading } = useGetCustomerList();

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spin />
      </div>
    );
  }

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
          CUSTOMER LIST
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4 mt-4 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 w-96 flex-col">
            <CustomerSearchBar />
          </div>
          <div className="flex">
            <Popup title="Add a new Customer" content={<AddCustomer />}>
              <ConfigAntdButton>
                <Button type="primary" icon={<PlusCircleOutlined />}>
                  Add Customer
                </Button>
              </ConfigAntdButton>
            </Popup>
          </div>
        </div>
        <Table
          columns={CustomersColumn}
          dataSource={data}
          pagination={{
            pageSize: 5,
            position: ['bottomCenter'],
          }}
          scroll={{
            x: 1800,
          }}
        />
      </div>
    </div>
  );
};

export default CustomerList;
