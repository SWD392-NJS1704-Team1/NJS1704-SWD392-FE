import { Button, Typography } from 'antd';
import ConfigAntdButton from '../Button/ConfigAntdButton';
import { useDispatch } from 'react-redux';
import { closePopup } from '@/store/reducers/popupReducer';
import { useDeleteCustomer } from './useDeleteCustomer';

const DeleteCustomer = ({ id, name }) => {
  const dispatch = useDispatch();
  const deleteCustomer = useDeleteCustomer(id);

  const handleCancel = () => {
    console.log('Cancel');
    dispatch(closePopup('Delete Customer'));
  };

  const handleDelete = () => {
    deleteCustomer.mutate();
  };
  console.log(name);
  console.log(id);
  return (
    <div className="p-2">
      <Typography.Text>Are you sure to delete {name}?</Typography.Text>
      <div className="flex flex-row gap-1 justify-center p-4">
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

export default DeleteCustomer;
