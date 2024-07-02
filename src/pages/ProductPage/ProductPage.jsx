import React, { useState, useEffect } from 'react';
import AddProduct from '@/components/AddProduct/AddProduct';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import SearchBar from '@/components/SearchBar/Search-bar';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import useGetProductsList from './useGetProductsList';
import { ProductsColumn } from '@/constant/table-column';

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
    <>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          PRODUCTS
        </Typography.Title>
      </div>
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
        <Table
          columns={ProductsColumn}
          dataSource={data?.productsData}
          pagination={{
            current: currentPage,
            total: data?.productsPage * pageSize,
            pageSize: pageSize,
            showSizeChanger: true,
            onChange: (page, size) =>
              handleTableChange({ current: page, pageSize: size }),
            position: ['bottomCenter'],
          }}
        />
      </div>
    </>
  );
};

export default ProductPage;
