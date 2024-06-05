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
import UpdateUser from "@/components/UpdateUser/UpdateUser";

// Navigation Sider
export const MenuItems = [
  {
    label: "Dashboard",
    key: PATHS.HOME,
    icon: <DashboardOutlined />
  },
  {
    label: "Product",
    key: PATHS.PRODUCT.INDEX,
    icon: <ProductOutlined />,
  },
  {
    label: "Order",
    key: "order",
    icon: <ShopOutlined />,
  },
  {
    label: "Customer",
    key: PATHS.CUSTOMER.INDEX,
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
      label: (
        <Popup
          title="Update User"
          content={<UpdateUser id={id} />}
        >
          Update User
        </Popup>
      ),
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
