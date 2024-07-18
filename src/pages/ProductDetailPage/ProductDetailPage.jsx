import React, { useEffect, useState } from 'react';
import useProductDetail from './useProductDetail';
import { Link, useParams } from 'react-router-dom';
import {
  Breadcrumb,
  Button,
  Card,
  Descriptions,
  Form,
  Image,
  Input,
  Select,
  Spin,
  Typography,
} from 'antd';
import { PATHS } from '@/constant/path';
import { EditOutlined } from '@ant-design/icons';
import { Controller, useForm } from 'react-hook-form';
import { MESS, REGEX } from '@/constant/validate';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import useGetTypePricesList from '../TypePricespage/useGetTypePricesList';
import useGetCounterList from '../CounterManagement/useGetCounterList';
import useUpdateProductDetail from './useUpdateProductDetail';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useProductDetail(id);
  const { data: typeList, isLoading: typeLoading } = useGetTypePricesList();
  const { data: counterList, isLoading: counterLoading } = useGetCounterList();
  const [isEdit, setIsEdit] = useState(false);
  const updateProduct = useUpdateProductDetail();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateProduct.mutate({
      id: id,
      product_name: data.product_name,
      barcode: data.barcode,
      quantity: data.quantity,
      price_processing: data.price_processing,
      price_stone: data.price_stone,
      weight: data.weight,
      description: data.description,
      image_url: data.image_url,
      type_id: data.type_id,
      counter_id: data.counter_id,
    });
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
    reset();
  };

  useEffect(() => {
    if (data) {
      reset({
        product_name: data?.product_name,
        barcode: data?.barcode,
        quantity: data?.quantity,
        price_processing: data?.price_processing,
        price_stone: data?.price_stone,
        weight: data?.weight,
        description: data?.description,
        image_url: data?.image_url,
        type_id: data?.type.id,
        counter_id: data?.counter_id.id,
      });
    }
  }, [data, reset]);

  if (typeLoading || counterLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Spin />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 w-full">
      <Card className="w-full max-w-3xl shadow-lg">
        {!isEdit && (
          <div className="flex float-end">
            <ConfigAntdButton type="primary">
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={handleEdit}
              >
                Update Product
              </Button>
            </ConfigAntdButton>
          </div>
        )}
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
        <Form onFinish={handleSubmit(onSubmit)} layout="horizontal">
          <div className="mb-4">
            <Image
              className="rounded-md"
              src={data?.image_url}
              alt={data?.product_name}
              width={200}
              height={200}
            />
          </div>
          <Descriptions
            title="Product Details"
            bordered
            column={1}
            className="bg-white rounded-md"
          >
            <Descriptions.Item label="Product Name">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="product_name"
                    control={control}
                    defaultValue=""
                    rules={{ required: MESS.ERROR_PRODUCT_NAME }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Product Name" />
                    )}
                  />
                  {errors.product_name && (
                    <p className="text-red-500">
                      {errors.product_name.message}
                    </p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.product_name}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Barcode">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="barcode"
                    control={control}
                    defaultValue=""
                    rules={{ required: MESS.ERROR_PRODUCT_BARCODE }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Barcode" />
                    )}
                  />
                  {errors.barcode && (
                    <p className="text-red-500">{errors.barcode.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.barcode}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Quantity">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="quantity"
                    control={control}
                    defaultValue=""
                    rules={{ required: MESS.ERROR_PRODUCT_QUANTITY_INVALID }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Quantity" />
                    )}
                  />
                  {errors.quantity && (
                    <p className="text-red-500">{errors.quantity.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.quantity}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Price (Processing)">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="price_processing"
                    control={control}
                    defaultValue=""
                    rules={{ required: MESS.ERROR_PRODUCT_PRICE_PROCESSING }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Price Processing" />
                    )}
                  />
                  {errors.price_processing && (
                    <p className="text-red-500">
                      {errors.price_processing.message}
                    </p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.price_processing}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Price (Stone)">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="price_stone"
                    control={control}
                    defaultValue=""
                    rules={{ required: MESS.ERROR_PRODUCT_PRICE_STONE }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Price Stone" />
                    )}
                  />
                  {errors.price_stone && (
                    <p className="text-red-500">{errors.price_stone.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.price_stone}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Weight">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="weight"
                    control={control}
                    defaultValue=""
                    rules={{ required: MESS.ERROR_PRODUCT_WEIGHT }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Weight" />
                    )}
                  />
                  {errors.weight && (
                    <p className="text-red-500">{errors.weight.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.weight}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Description">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    rules={{ required: MESS.ERROR_PRODUCT_DESCRIPTION }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Description" />
                    )}
                  />
                  {errors.description && (
                    <p className="text-red-500">{errors.description.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.description}</Typography>
              )}
            </Descriptions.Item>
            {isEdit && (
              <Descriptions.Item label="Image URL">
                <Form.Item>
                  <Controller
                    name="image_url"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: MESS.ERROR_PRODUCT_IMAGE,
                      pattern: {
                        value: REGEX.URL_IMG,
                        message: 'URL không hợp lệ',
                      },
                    }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Image URL" />
                    )}
                  />
                  {errors.image_url && (
                    <p className="text-red-500">{errors.image_url.message}</p>
                  )}
                </Form.Item>
              </Descriptions.Item>
            )}
            <Descriptions.Item label="Type">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="type_id"
                    control={control}
                    defaultValue=""
                    rules={{ required: MESS.ERROR_PRODUCT_CATEGORY_ID }}
                    render={({ field }) => (
                      <Select {...field} placeholder="--Select Type--">
                        {typeList?.map((type) => (
                          <Select.Option key={type.id} value={type.id}>
                            {type.type}
                          </Select.Option>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.type_id && (
                    <p className="text-red-500">{errors.type_id.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.type?.type}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Counter">
              {isEdit ? (
                <Form.Item>
                  <Controller
                    name="counter_id"
                    control={control}
                    defaultValue=""
                    rules={{ required: MESS.ERROR_COUNTER }}
                    render={({ field }) => (
                      <Select {...field} placeholder="--Select Counter--">
                        {counterList?.map((counter) => (
                          <Select.Option key={counter.id} value={counter.id}>
                            {counter.counterName}
                          </Select.Option>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.counter_id && (
                    <p className="text-red-500">{errors.counter_id.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data?.counter_id?.counterName}</Typography>
              )}
            </Descriptions.Item>
          </Descriptions>

          {isEdit && (
            <div className="button-group mt-4 flex gap-2 float-end">
              <ConfigAntdButton type="danger">
                <Button type="primary" onClick={handleCancel}>
                  Cancel
                </Button>
              </ConfigAntdButton>
              <ConfigAntdButton type="primary">
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </ConfigAntdButton>
            </div>
          )}
        </Form>
      </Card>
    </div>
  );
};

export default ProductDetailPage;
