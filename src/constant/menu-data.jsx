import {
  ApartmentOutlined,
  CloseCircleOutlined,
  DashboardOutlined,
  EditOutlined,
  MoneyCollectOutlined,
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
import DeleteCounter from '@/components/DeleteCounter/DeleteCounter';
import UpdateCounter from '@/components/UpdateCounter/UpdateCounter';
import UpdateProduct from '@/components/UpdateProduct/UpdateProduct';
import DeleteProduct from '@/components/DeleteProduct/DeleteProduct';

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
    label: 'Type Prices',
    key: 'type-prices',
    icon: <MoneyCollectOutlined />,
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
export const ViewCounterOptionDropdown = (id, name) => [
  {
    label: (
      <Popup
        title="Update Counter"
        content={<UpdateCounter id={id} name={name} />}
      >
        Update Counter
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        title="Delete Counter"
        content={<DeleteCounter id={id} name={name} />}
      >
        Delete Counter
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
];
export const ViewProductOptionDropdown = (id, product_name) => [
  {
    label: (
      <Popup
        title="Update Product"
        content={<UpdateProduct id={id} product_name={product_name} />}
      >
        Update Product
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup
        title="Delete Product"
        content={<DeleteProduct id={id} product_name={product_name} />}
      >
        Delete Product
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
];
