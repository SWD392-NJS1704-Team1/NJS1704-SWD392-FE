import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import SearchBar from '@/components/SearchBar/Search-bar';
import { TypePricesColumn } from '@/constant/table-column';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Pagination, Table, Typography } from 'antd';
import React from 'react';
import useGetTypePricesList from './useGetTypePricesList';
import { useLocation, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import AddTypePrices from '@/components/AddTypePrices/AddTypePrices';

const PRICES_LIMITS = 5;

const TypePricesPage = () => {
  const { search } = useLocation();
  // console.log("search", search);
  const queryObject = queryString.parse(search);
  const [_, setSearchParams] = useSearchParams();
  const updateQueryString = (queryObject) => {
    const newQueryString = queryString.stringify({
      ...queryObject,
      limit: PRICES_LIMITS,
    });
    setSearchParams(new URLSearchParams(newQueryString));
  };
  const onPagiChange = (page) => {
    updateQueryString({ ...queryObject, page: page });
  };

  const { data } = useGetTypePricesList(search);
  return (
    <>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          TYPE PRICES
        </Typography.Title>
      </div>
      {/* Add your product details and components here */}
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 w-96 flex-col">
            <SearchBar />
          </div>
          <div className="flex">
            <Popup title="Add a new Product" content={<AddTypePrices />}>
              <ConfigAntdButton>
                <Button
                  type="primary"
                  className="hover:"
                  icon={<PlusCircleOutlined />}
                >
                  Add Type Price
                </Button>
              </ConfigAntdButton>
            </Popup>
          </div>
        </div>
        <Table columns={TypePricesColumn} dataSource={data} />
      </div>
      <div className="pagination flex items-center justify-center">
        <Pagination defaultCurrent={1} onChange={onPagiChange} />
      </div>
    </>
  );
};

export default TypePricesPage;
