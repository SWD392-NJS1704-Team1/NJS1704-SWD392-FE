import Dropdown from '@/components/Dropdown/Dropdown';
import {
  ViewCounterOptionDropdown,
  ViewCustomerOptionDropdown,
  ViewOrderDetailOptionDropdown,
  ViewOrderOptionDropdown,
  ViewProductOptionDropdown,
  ViewPromotionOptionDropdown,
  ViewTypePricesOptionDropdown,
  ViewUserOptionDropdown,
} from './menu-data';
import { Image } from 'antd';

export const UsersColumn = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 100,
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
    defaultSortOrder: 'ascend',
    fixed: 'left',
  },
  {
    title: 'Full Name',
    dataIndex: 'fullname',
    key: 'fullname',
    fixed: 'left',
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
    fixed: 'right',
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
    width: 100,
    key: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
    defaultSortOrder: 'ascend',
    fixed: 'left',
  },
  {
    title: 'Full Name',
    dataIndex: 'fullName',
    key: 'fullName',
    fixed: 'left',
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
    fixed: 'right',
    render: (record) => {
      const items = ViewCustomerOptionDropdown(record.id, record.fullName);
      return <Dropdown items={items} />;
    },
  },
];

export const ProductsColumn = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    key: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
    defaultSortOrder: 'ascend',
    fixed: 'left',
  },
  {
    title: 'Product Name',
    dataIndex: 'product_name',
    key: 'product_name',
    fixed: 'left',
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
    render: (image_url) => <Image width={80} height={80} src={image_url} />,
  },
  {
    title: 'Type ID',
    dataIndex: 'type',
    key: 'type',
    render: (type) => type.type,
  },
  {
    title: 'Counter ID',
    dataIndex: 'counter_id',
    key: 'counter_id',
    render: (counter_id) => counter_id.counterName,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    render: (record) => {
      const items = ViewProductOptionDropdown(record.id, record.product_name);
      return <Dropdown items={items} />;
    },
  },
];

export const CounterColumn = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 100,
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
    defaultSortOrder: 'ascend',
  },
  {
    title: 'Counter Name',
    dataIndex: 'counterName',
    width: 500,
    key: 'counterName',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    width: 500,
    key: 'location',
  },
  {
    title: 'Action',
    key: 'operation',
    width: 200,
    align: 'center',
    render: (record) => {
      const items = ViewCounterOptionDropdown(record.id, record.counterName);
      return <Dropdown items={items} />;
    },
  },
];

export const TypePricesColumn = [
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
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Buy Price Per Gram',
    dataIndex: 'buy_price_per_gram',
    key: 'buy_price_per_gram',
  },
  {
    title: 'Sell Price Per Gram',
    dataIndex: 'sell_price_per_gram',
    key: 'sell_price_per_gram',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Action',
    key: 'operation',
    render: (record) => {
      const items = ViewTypePricesOptionDropdown(record.id);
      return <Dropdown items={items} />;
    },
  },
];

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const PromotionColumn = [
  {
    title: 'No',
    dataIndex: 'id',
    key: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
    defaultSortOrder: 'ascend',
  },
  {
    title: 'Promotion Code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Discount',
    dataIndex: 'discountPercentage',
    key: 'discountPercentage',
  },
  {
    title: 'Fixed Discount',
    dataIndex: 'fixedDiscountAmount',
    key: 'fixedDiscountAmount',
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
    render: (startDate) => formatDate(startDate),
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    key: 'endDate',
    render: (endDate) => formatDate(endDate),
  },
  // {
  //   title: 'Action',
  //   key: 'operation',
  //   render: (record) => {
  //     const items = ViewPromotionOptionDropdown(record.id, record.code);
  //     return <Dropdown items={items} />;
  //   },
  // },
];

export const OrderColumn = [
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
    title: 'Customer Name',
    dataIndex: ['customer', 'fullName'],
    key: 'fullName',
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (date) => new Date(date).toLocaleString(),
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Created By',
    dataIndex: 'created_by',
    key: 'created_by',
  },
  {
    title: 'Action',
    key: 'operation',
    render: (record) => {
      const items = ViewOrderOptionDropdown(
        record.id,
        record.customer.fullName
      );
      return <Dropdown items={items} />;
    },
  },
];

export const OrderDetailColumn = [
  {
    title: 'No',
    dataIndex: 'id',
    key: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
    defaultSortOrder: 'ascend',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: 'Action',
    key: 'operation',
    render: (record) => {
      const items = ViewOrderDetailOptionDropdown(record.id, record.fullName);
      return <Dropdown items={items} />;
    },
  },
];
