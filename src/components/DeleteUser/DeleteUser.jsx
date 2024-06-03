import { Button, Typography } from "antd";
import ConfigAntdButton from "../Button/ConfigAntdButton";
import { useDispatch } from "react-redux";
import { closePopup } from "@/store/reducers/popupReducer";

const DeleteUser = ({ id, name }) => {

    const dispatch = useDispatch();

    const handleCancel = () => {
        console.log('Cancel');
        dispatch(closePopup("Delete User"));
    }

    const handleDelete = () => {
        console.log('Delete');
        dispatch(closePopup("Delete User"));
    }

    return (
        <div>
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

export default DeleteUser;
