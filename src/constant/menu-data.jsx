import {
  ApartmentOutlined,
  CloseCircleOutlined,
  DashboardOutlined,
  EditOutlined,
  PercentageOutlined,
  ProductOutlined,
  ShopOutlined,
  UserOutlined,
  WalletFilled,
} from "@ant-design/icons";
import { PATHS } from "./path";
import { Link } from "react-router-dom";
import Popup from "@/components/Popup/Popup";
import DeleteUser from "@/components/DeleteUser/DeleteUser";

// Navigation Sider
export const MenuItems = [
  {
    label: "Dashboard",
    key: PATHS.HOME,
    icon: <DashboardOutlined />
  },
  {
    label: "Product",
    key: "product",
    icon: <ProductOutlined />,
  },
  {
    label: "Order",
    key: "order",
    icon: <ShopOutlined />,
  },
  {
    label: "Customer",
    key: "customer",
    icon: <UserOutlined />,
  },
  {
    label: "User management",
    key: PATHS.USER.INDEX,
    icon: <ApartmentOutlined />,
  },
  {
    label: "Counter",
    key: "counter",
    icon: <WalletFilled />,
  },
  {
    label: "Promotion",
    key: "promotion",
    icon: <PercentageOutlined />,
  },
];


export const ViewUserOptionDropdown = (id, name) => (
  [
    {
      label: <a href="">Edit</a>,
      key: 'edit',
      icon: <EditOutlined />
    },
    {
      label: (
        <Popup
          title="Delete User"
          content={<DeleteUser id={id} name={name} />}
        >
          Delete User
        </Popup>
      ),
      key: 'delete',
      icon: <CloseCircleOutlined />
    },
  ]
)
