import { MESS } from '@/constant/validate';
import { closePopup } from '@/store/reducers/popupReducer';
import { Button, Spin } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import ConfigAntdButton from '../Button/ConfigAntdButton';
import useGetProductsList from '@/pages/ProductPage/useGetProductsList';
import useGetCustomerList from '@/pages/CustomerManagement/useGetCustomerList';
import useGetUsersList from '@/pages/UserManagementPage/useGetUsersList';
import useAddOrder from './useAddOrder';
const AddOrder = () => {
  const dispatch = useDispatch();
  const AddOrder = useAddOrder();
  const { data: productList, isLoading, isError } = useGetProductsList();
  const { data: customerList } = useGetCustomerList();
  const { data: userList } = useGetUsersList();
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log(userList);
  const defaultValues = {
    product_id: '',
    quantity: '',
    unit_price: '',
    customer_id: '',
    user_id: '',
    type: '',
    discount: '',
  };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data);
    AddOrder.mutate({
      quantity: data.quantity,
      product_id: data.product_id,
      unit_price: data.unit_price,
      date: new Date().toISOString(),
      discount: data.discount,
      created_by: 'admin',
      type: data.type,
      customer_id: data.customer_id,
      user_id: data.user_id,
    });
    reset(defaultValues);
  };

  const handleCancel = () => {
    dispatch(closePopup('Add a new Order'));
    reset(defaultValues);
  };

  const product_id = watch('product_id');
  useEffect(() => {
    if (productList && product_id) {
      const product = productList.productsData.find(
        (p) => p.id === Number(product_id)
      );
      setSelectedProduct(product);
    }
  }, [product_id, productList]);

  if (isLoading) {
    return <div><Spin/></div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Product ID</h1>
          <div className="w-3/4">
            <select
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              {...register('product_id', { required: MESS.ERROR_NAME })}
            >
              <option value="" disabled>
                Select one
              </option>
              {productList?.productsData?.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.product_name}
                </option>
              ))}
            </select>
            {errors.product_id && (
              <span className="text-red-500 text-sm">
                {errors.product_id.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Quantity</h1>
          <div className="w-3/4">
            <select
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              {...register('quantity', { required: MESS.ERROR_NAME })}
              disabled={!selectedProduct}
            >
              <option value="" disabled>
                {selectedProduct
                  ? 'Select a quantity'
                  : 'Select a product first'}
              </option>
              {selectedProduct && (
                <option value={selectedProduct.quantity}>
                  {selectedProduct.quantity}
                </option>
              )}
            </select>
            {errors.quantity && (
              <span className="text-red-500 text-sm">
                {errors.quantity.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Price</h1>
          <div className="w-3/4">
            <select
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              {...register('unit_price', { required: MESS.ERROR_NAME })}
              disabled={!selectedProduct}
            >
              <option value="" disabled>
                {selectedProduct ? 'Select a price' : 'Select a product first'}
              </option>
              {selectedProduct && (
                <option value={selectedProduct.price_processing}>
                  {selectedProduct.price_processing}
                </option>
              )}
            </select>
            {errors.unit_price && (
              <span className="text-red-500 text-sm">
                {errors.unit_price.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Type</h1>
          <div className="w-3/4">
            {/* <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Type..."
              {...register('type', {
                required: MESS.ERROR_ORDER_TYPE,
              })}
            /> */}
            <select
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              {...register('type', { required: MESS.ERROR_NAME })}
              disabled={!selectedProduct}
            >
              <option value="" disabled>
                {selectedProduct ? 'Select a type' : 'Select a product first'}
              </option>
              {selectedProduct && (
                <option value={selectedProduct.type.type}>
                  {selectedProduct.type.type}
                </option>
              )}
            </select>
            {errors.type && (
              <span className="text-red-500 text-sm">
                {errors.type.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">
            Customer Name
          </h1>
          <div className="w-3/4">
            {/* <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Customer name..."
              {...register('customer_id', { required: MESS.ERROR_NAME })}
            /> */}
            <select
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              {...register('customer_id', { required: MESS.ERROR_NAME })}
            >
              <option value="" disabled>
                Select one
              </option>
              {customerList?.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.fullName}
                </option>
              ))}
            </select>
            {errors.customer_id && (
              <span className="text-red-500 text-sm">
                {errors.customer_id.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Staff Name</h1>
          <div className="w-3/4">
            {/* <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Staff name..."
              {...register('user_id', { required: MESS.ERROR_ORDER_STAFF_NAME })}
            /> */}
            <select
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              {...register('user_id', { required: MESS.ERROR_NAME })}
            >
              <option value="" disabled>
                Select one
              </option>
              {userList?.usersData?.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.fullname}
                </option>
              ))}
            </select>
            {errors.user_id && (
              <span className="text-red-500 text-sm">
                {errors.user_id.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Discount</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Discount..."
              {...register('discount', { required: MESS.ERROR_ADDRESS })}
            />
            {errors.discount && (
              <span className="text-red-500 text-sm">
                {errors.discount.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-row gap-1 justify-center p-4">
          <ConfigAntdButton type="danger">
            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
          </ConfigAntdButton>
          <ConfigAntdButton>
            <Button type="primary" onClick={handleSubmit(onSubmit)}>
              Add
            </Button>
          </ConfigAntdButton>
        </div>
      </form>
    </div>
  );
};

export default AddOrder;
