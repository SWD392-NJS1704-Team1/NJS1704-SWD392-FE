import Dropdown from '@/components/Dropdown/Dropdown';
import {
  ViewCustomerOptionDropdown,
  ViewUserOptionDropdown,
} from './menu-data';

export const UsersColumn = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
    defaultSortOrder: 'ascend',
  },
  {
    title: 'Full Name',
    dataIndex: 'fullname',
    key: 'fullname',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone_number',
    key: 'phone_number',
  },
  {
    title: 'DOB',
    dataIndex: 'date_of_birth',
    key: 'date_of_birth',
  },
  {
    title: 'Role',
    dataIndex: 'role_name',
    key: 'role_name',
  },
  {
    title: 'Counter',
    dataIndex: 'counter_name',
    key: 'counter_name',
  },
  {
    title: 'Action',
    key: 'operation',
    render: (record) => {
      const items = ViewUserOptionDropdown(record.id, record.fullname);
      return <Dropdown items={items} />;
    },
  },
];

export const CustomersColumn = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
    defaultSortOrder: 'ascend',
  },
  {
    title: 'Full Name',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Point',
    dataIndex: 'accumulated_point',
    key: 'accumulated_point',
  },
  {
    title: 'Action',
    key: 'operation',
    render: (record) => {
      const items = ViewCustomerOptionDropdown(record.id, record.fullName);
      return <Dropdown items={items} />;
    },
  },
];

export const ProductsColumn = [
  {
    title: 'Product Name',
    dataIndex: 'product_name',
    key: 'product_name',
  },
  {
    title: 'Barcode',
    dataIndex: 'barcode',
    key: 'barcode',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price (Processing)',
    dataIndex: 'price_processing',
    key: 'price_processing',
  },
  {
    title: 'Price (Stone)',
    dataIndex: 'price_stone',
    key: 'price_stone',
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Image URL',
    dataIndex: 'image_url',
    key: 'image_url',
  },
  {
    title: 'Type ID',
    dataIndex: 'type_id',
    key: 'type_id',
  },
  {
    title: 'Counter ID',
    dataIndex: 'counter_id',
    key: 'counter_id',
  },
];
