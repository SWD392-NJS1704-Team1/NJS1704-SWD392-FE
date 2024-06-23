import { Button, Typography } from 'antd';
import ConfigAntdButton from '../Button/ConfigAntdButton';
import { useDispatch } from 'react-redux';
import { closePopup } from '@/store/reducers/popupReducer';
import { useDeleteTypePrice } from './useDeleteTypePrice';

const DeleteTypePrice = ({ id, type }) => {
  const dispatch = useDispatch();
  const deleteTypePrice = useDeleteTypePrice(id);

  const handleCancel = () => {
    dispatch(closePopup('Delete Type Price'));
  };

  const handleDelete = () => {
    deleteTypePrice.mutate();
  };

  return (
    <div className="px-6 py-2">
      <Typography.Text>
        Are you sure to delete type price {type}?
      </Typography.Text>
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

export default DeleteTypePrice;
