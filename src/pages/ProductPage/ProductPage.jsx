import React, { useState, useEffect } from 'react';
import AddProduct from '@/components/AddProduct/AddProduct';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import useGetProductsList from './useGetProductsList';
import ProductSearchBar from '@/components/SearchBar/Product-search-bar';
import { ProductsColumn } from '@/constant/table-column';
import './product-table.css';

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = queryString.parse(location.search);
  const initialPage = Number(queryParams.page) || 1;
  const initialLimit = Number(queryParams.limit) || 5;

  // State for current page and page size
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialLimit);

  const { data } = useGetProductsList(currentPage - 1, pageSize);

  // Update the URL whenever currentPage or pageSize changes
  useEffect(() => {
    const newQueryParams = queryString.stringify({
      page: currentPage,
      limit: pageSize,
    });
    if (location.search !== `?${newQueryParams}`) {
      navigate(`?${newQueryParams}`, { replace: true });
    }
  }, [currentPage, pageSize, navigate]);

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

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
      <div className="flex flex-col gap-4 p-4">
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
            current: currentPage,
            total: data?.productsPage * pageSize,
            pageSize: pageSize,
            pageSizeOptions: [5, 10, 20, 50],
            showSizeChanger: true,
            onChange: (page, size) =>
              handleTableChange({ current: page, pageSize: size }),
            position: ['bottomCenter'],
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
