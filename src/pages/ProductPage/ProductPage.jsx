import AddProduct from '@/components/AddProduct/AddProduct';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import SearchBar from '@/components/SearchBar/Search-bar';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Pagination, Table, Typography } from 'antd';
import useGetProductsList from './useGetProductsList';
import { useLocation, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { ProductsColumn } from '@/constant/table-column';

const PRODUCT_LIMITS = 5;

const ProductPage = () => {
  const { search } = useLocation();
  // console.log("search", search);
  const queryObject = queryString.parse(search);
  const [_, setSearchParams] = useSearchParams();
  const updateQueryString = (queryObject) => {
    const newQueryString = queryString.stringify({
      ...queryObject,
      limit: PRODUCT_LIMITS,
    });
    setSearchParams(new URLSearchParams(newQueryString));
  };
  const onPagiChange = (page) => {
    updateQueryString({ ...queryObject, page: page });
  };

  const { data } = useGetProductsList(search);

  return (
    <>
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
        <Table columns={ProductsColumn} dataSource={data?.productsData} />
      </div>
      <div className="pagination flex items-center justify-center">
        <Pagination defaultCurrent={1} onChange={onPagiChange} />
      </div>
    </>
  );
};

export default ProductPage;
