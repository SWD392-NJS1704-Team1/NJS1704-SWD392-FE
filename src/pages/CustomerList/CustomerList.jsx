import AddCustomer from "@/components/AddCustomer/AddCustomer";
import ConfigAntdButton from "@/components/Button/ConfigAntdButton";
import Popup from "@/components/Popup/Popup";
import SearchBar from "@/components/SearchBar/Search-bar";
import {
  PlusCircleOutlined,
  SearchOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Button, Input, Table, Typography } from "antd";

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Customer Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone number",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Point",
    dataIndex: "point",
    key: "point",
  },
];

const CustomerList = () => {
  // const { data } = useGetUsersList()
  const data = null;

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
           <SearchBar/>
          </div>
          <div className="flex">
            <Popup title="Add a new Customer" content={<AddCustomer/>}>
              <ConfigAntdButton>
                <Button type="primary" icon={<PlusCircleOutlined />}>
                  Add Customer
                </Button>
              </ConfigAntdButton>
            </Popup>
          </div>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default CustomerList;
