import {
  ApartmentOutlined,
  DashboardOutlined,
  PercentageOutlined,
  ProductOutlined,
  ShopOutlined,
  UserOutlined,
  WalletFilled,
} from "@ant-design/icons";
import { PATHS } from "./path";

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
