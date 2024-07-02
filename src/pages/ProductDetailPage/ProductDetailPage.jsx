import React from 'react';
import useProductDetail from './useProductDetail';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb, Card, Descriptions, Image } from 'antd';
import { PATHS } from '@/constant/path';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useProductDetail(id);
  console.log(data);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 w-full">
      <Card className="w-full max-w-3xl shadow-lg">
        <div className="mb-4">
          <Breadcrumb
            items={[
              {
                title: <Link to={PATHS.PRODUCT.INDEX}>Products List</Link>,
              },
              {
                title: 'Product Detail',
              },
            ]}
          />
        </div>
        <Image
          className="rounded-md"
          src={data.image_url}
          alt={data.product_name}
          width={200}
          height={200}
        />
        <Descriptions
          title="Product Details"
          bordered
          column={1}
          className="bg-white rounded-md"
        >
          <Descriptions.Item label="Product Name">
            {data.product_name}
          </Descriptions.Item>
          <Descriptions.Item label="Barcode">{data.barcode}</Descriptions.Item>
          <Descriptions.Item label="Quantity">
            {data.quantity}
          </Descriptions.Item>
          <Descriptions.Item label="Price (Processing)">
            {data.price_processing}
          </Descriptions.Item>
          <Descriptions.Item label="Price (Stone)">
            {data.price_stone}
          </Descriptions.Item>
          <Descriptions.Item label="Weight">{data.weight}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {data.description}
          </Descriptions.Item>
          <Descriptions.Item label="Type">{data.type?.type}</Descriptions.Item>
          <Descriptions.Item label="Counter">
            {data.counter_id?.counterName}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default ProductDetailPage;
