import AddUser from "@/components/AddUser/AddUser";
import ConfigAntdButton from "@/components/Button/ConfigAntdButton";
import Popup from "@/components/Popup/Popup";
import {
  PlusCircleOutlined,
  SearchOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Button, Input, Table, Typography } from "antd";
import useGetUsersList from "./useGetUsersList";

const columns = [
  {
    title: "Full Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "DOB",
    dataIndex: "dob",
    key: "dob",
  },
  {
    title: "Role ID",
    dataIndex: "role_id",
    key: "role_id",
  },
  {
    title: "Counter ID",
    dataIndex: "counter_id",
    key: "counter_id",
  }
];

const UserManagement = () => {

  // const { data } = useGetUsersList()
  const data = null

  return (
    <div>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          USER MANAGEMENT
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 w-96 flex-col">
            <div className="flex gap-3">
              <Input prefix={<SearchOutlined />} placeholder="Search by..." />
              <ConfigAntdButton>
                <Button type="primary" icon={<WifiOutlined />}>
                  Filter
                </Button>
              </ConfigAntdButton>
            </div>
          </div>
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
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default UserManagement;
