import { Button, Typography } from 'antd';
import ConfigAntdButton from '../Button/ConfigAntdButton';
import { useDispatch } from 'react-redux';
import { closePopup } from '@/store/reducers/popupReducer';
import { useDeleteProduct } from './useDeleteProduct';

const DeleteProduct = ({ id, product_name }) => {
  const dispatch = useDispatch();
  const deleteProduct = useDeleteProduct(id);

  const handleCancel = () => {
    dispatch(closePopup('Delete Product'));
  };

  const handleDelete = () => {
    deleteProduct.mutate();
  };

  return (
    <div className="px-6 py-2">
      <Typography.Text>Are you sure to delete {product_name}?</Typography.Text>
      <div className="flex flex-row gap-1 justify-center p-4 mt-2">
        <ConfigAntdButton type="danger">
          <Button type="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </ConfigAntdButton>
        <ConfigAntdButton>
          <Button type="primary" onClick={handleDelete}>
            Delete
          </Button>
        </ConfigAntdButton>
      </div>
    </div>
  );
};

export default DeleteProduct;
