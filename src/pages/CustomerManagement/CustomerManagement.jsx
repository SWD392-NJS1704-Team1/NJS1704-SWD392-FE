import AddCustomer from '@/components/AddCustomer/AddCustomer';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import SearchBar from '@/components/SearchBar/Search-bar';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import useGetCustomerList from './useGetCustomerList';
import { CustomersColumn } from '@/constant/table-column';



const CustomerList = () => {
  const { data } = useGetCustomerList();
  // const data = null;
console.log(data)
  return (
    <div>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          CUSTOMER LIST
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 w-96 flex-col">
            <SearchBar />
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
        <Table columns={CustomersColumn} dataSource={data} />
      
      </div>
    </div>
  );
};

export default CustomerList;
