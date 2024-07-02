import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import { ProductsColumn } from '@/constant/table-column';
import { useState } from 'react';
import AddProduct from '@/components/AddProduct/AddProduct';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import useGetProductsList from './useGetProductsList';
import ProductSearchBar from '@/components/SearchBar/Product-search-bar';

const ProductPage = () => {
  const [current, setCurrent] = useState(1);
  const [limit, setLimit] = useState(5);
  const { data } = useGetProductsList(current - 1, limit);

  return (
    <div
      style={{
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div className="bg-white w-full flex items-center p-4 mt-1 rounded-lg shadow-sm">
        <Typography.Title level={3} type="secondary">
          PRODUCTS
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4 mt-4 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 w-96 flex-col">
            <ProductSearchBar />
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
        <Table
          columns={ProductsColumn}
          dataSource={data?.productsData}
          pagination={{
            total: limit * data?.productsPage,
            position: ['bottomCenter'],
            current: current,
            pageSize: limit,
            pageSizeOptions: [5, 10, 20, 30],
            showSizeChanger: true,
            onChange: (current, limit) => {
              setCurrent(current);
              setLimit(limit);
            },
          }}
          scroll={{
            x: 1800,
          }}
        />
      </div>
    </div>
  );
};

export default ProductPage;
