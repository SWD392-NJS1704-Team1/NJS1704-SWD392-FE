import {
  ApartmentOutlined,
  CloseCircleOutlined,
  DashboardOutlined,
  EditOutlined,
  PercentageOutlined,
  ProductOutlined,
  ShopOutlined,
  SyncOutlined,
  UserOutlined,
  WalletFilled,
} from '@ant-design/icons';
import { PATHS } from './path';
import Popup from '@/components/Popup/Popup';
import DeleteUser from '@/components/DeleteUser/DeleteUser';
import UpdateUser from '@/components/UpdateUser/UpdateUser';
import DeleteCustomer from '@/components/DeleteCustomer/DeleteCustomer';
import UpdateCustomer from '@/components/UpdateCustomer/UpdateCustomer';
import ResetPassword from '@/components/ResetUserPassword/ResetPassword';

// Navigation Sider
export const MenuItems = [
  {
    label: 'Dashboard',
    key: PATHS.HOME,
    icon: <DashboardOutlined />,
  },
  {
    label: 'Product',
    key: PATHS.PRODUCT.INDEX,
    icon: <ProductOutlined />,
  },
  {
    label: 'Order',
    key: 'order',
    icon: <ShopOutlined />,
  },
  {
    label: 'Customer',
    key: PATHS.CUSTOMER.INDEX,
    icon: <UserOutlined />,
  },
  {
    label: 'User management',
    key: PATHS.USER.INDEX,
    icon: <ApartmentOutlined />,
  },
  {
    label: 'Counter',
    key: 'counter',
    icon: <WalletFilled />,
  },
  {
    label: 'Promotion',
    key: 'promotion',
    icon: <PercentageOutlined />,
  },
];

export const ViewUserOptionDropdown = (id, name) => [
  {
    label: (
      <Popup title="Update User" content={<UpdateUser id={id} />}>
        Update User
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup title="Delete User" content={<DeleteUser id={id} name={name} />}>
        Delete User
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
  {
    label: (
      <Popup title="Reset Password" content={<ResetPassword id={id} />}>
        Reset Password
      </Popup>
    ),
    key: 'reset',
    icon: <SyncOutlined />,
  },
];
export const ViewCustomerOptionDropdown = (id, name) => [
  {
    label: (
      <Popup
        title="Update Customer"
        content={<UpdateCustomer id={id} name={name} />}
      >
        Update Customer
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        title="Delete Customer"
        content={<DeleteCustomer id={id} name={name} />}
      >
        Delete Customer
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
];
