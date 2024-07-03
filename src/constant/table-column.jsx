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
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
    },
    defaultSortOrder: 'ascend',
  },
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
  {
    title: 'Action',
    key: 'operation',
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
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    key: 'endDate',
  },
  {
    title: 'Action',
    key: 'operation',
    render: (record) => {
      const items = ViewPromotionOptionDropdown(record.code);
      return <Dropdown items={items} />;
    },
  },
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
    title: 'Order ID',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'Customer Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Staff Name',
    dataIndex: 'staffName',
    key: 'staffName',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    key: 'operation',
    render: (record) => {
      const items = ViewOrderOptionDropdown(record.id, record.fullName);
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