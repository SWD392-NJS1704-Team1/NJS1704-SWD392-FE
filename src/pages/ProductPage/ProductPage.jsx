import AddProduct from '@/components/AddProduct/AddProduct';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Pagination from '@/components/Pagination/Pagination';
import Popup from '@/components/Popup/Popup';
import SearchBar from '@/components/SearchBar/Search-bar';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import { useQuery } from '@tanstack/react-query';
import ProductService from '@/services/productService';
import useGetProductsList from './useGetProductsList';

const columns = [
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
const ProductPage = () => {
  const { data } = useGetProductsList();
  return (
    <div>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          PRODUCTS
        </Typography.Title>
      </div>
      {/* Add your product details and components here */}
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 w-96 flex-col">
            <SearchBar />
          </div>
          <div className="flex">
            <Popup title="Add a new Product" content={<AddProduct />}>
              <ConfigAntdButton>
                <Button
                  type="primary"
                  className="hover:"
                  icon={<PlusCircleOutlined />}
                >
                  Add Product
                </Button>
              </ConfigAntdButton>
            </Popup>
          </div>
        </div>
        <Table columns={columns} dataSource={data?.productsData} />
      </div>
      <Pagination />
    </div>
  );
};

export default ProductPage;
