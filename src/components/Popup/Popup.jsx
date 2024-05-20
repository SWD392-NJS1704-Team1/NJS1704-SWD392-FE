import { closePopup, openPopup } from "@/store/reducers/popupReducer";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Modal, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Popup = ({ children, content, title }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.popup[title]);

  return (
    <>
      <div onClick={() => dispatch(openPopup(title))}>{children}</div>
      <Modal
        centered
        open={isOpen}
        onOk={() => dispatch(closePopup(title))}
        onCancel={() => dispatch(closePopup(title))}
        styles={{ content: { padding: 0 } }}
        title={
          <div className="px-3 py-2 rounded-t-md bg-primary">
            <div className="flex">
              <div className="mx-auto">
                <Typography.Title level={3} type="secondary">
                  {title}
                </Typography.Title>
              </div>
              <CloseCircleOutlined
                className="text-foreground"
                onClick={() => dispatch(closePopup(title))}
              />
            </div>
          </div>
        }
        footer={null}
        closeIcon={null}
      >
        <div className="p-4">{content}</div>
      </Modal>
    </>
  );
};

export default Popup;
