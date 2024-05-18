
import { DashboardOutlined, PercentageOutlined, ProductOutlined, ShopOutlined, UserOutlined, WalletFilled, } from '@ant-design/icons';

// Navigation Sider
export const MenuItems = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: <DashboardOutlined />,
   
  },
  {
    label: 'Product',
    key: 'product',
    icon: <ProductOutlined />,

  },
  {
    label: 'Order',
    key: 'order',
    icon: <ShopOutlined />,
    
  },
  {
    label: 'Customer',
    key: 'customer',
    icon: <UserOutlined />,
    
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
    
  }
];
